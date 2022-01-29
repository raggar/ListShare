package app.backend.controller

import app.backend.dtos.LoginDTO
import app.backend.dtos.RegisterDTO
import app.backend.errors.LoginException
import app.backend.errors.RegistrationException
import app.backend.models.User
import app.backend.services.UserService
import app.backend.utils.cleanEmail
import app.backend.utils.cleanName
import app.backend.utils.cleanPassword
import app.backend.utils.decodeJwt
import app.backend.utils.isEmailValid
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CookieValue
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.Date
import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletResponse

@RestController
@RequestMapping("api")
class AuthController(private val userService: UserService) {

  @GetMapping("me")
  fun user(@CookieValue("jwt") jwt: String): ResponseEntity<Any> {
    val decodedJwt = decodeJwt(jwt)
    return ResponseEntity.ok(userService.getById(decodedJwt.body.issuer.toInt()))
  }

  @PostMapping("register")
  fun register(@RequestBody body: RegisterDTO): ResponseEntity<User> {
    val user = User()

    user.firstname = cleanName(body.firstname)
    user.lastname = cleanName(body.lastname)
    user.email = cleanEmail(body.email)
    user.password = cleanPassword(body.password)

    if (userService.findByEmail(user.email) != null) {
      throw RegistrationException("Email in use!")
    }

    if (!isEmailValid(user.email)) {
      throw RegistrationException("Email is invalid!")
    }

    return ResponseEntity.ok(userService.save(user))
  }

  @PostMapping("login")
  fun login(@RequestBody body: LoginDTO, response: HttpServletResponse): ResponseEntity<Any> {
    val email = cleanEmail(body.email)
    val password = cleanPassword(body.password)

    val user = userService.findByEmail(email)
        ?: throw LoginException("Email not found!")

    if (!user.comparePassword(password)) {
      throw LoginException("Invalid password!")
    }

    val issuer = user.id.toString()

    val jwt = Jwts.builder()
        .setIssuer(issuer)
        .setExpiration(Date(System.currentTimeMillis() + 60 * 24 * 1000))
        .signWith(SignatureAlgorithm.HS512, "secret") // 1 day
        .compact()

    val cookie = Cookie("jwt", jwt)
    cookie.isHttpOnly = true

    response.addCookie(cookie)

    return ResponseEntity.ok("Successfully logged in.")
  }

  @PostMapping("logout")
  fun logout(response: HttpServletResponse): ResponseEntity<Any> {
    val cookie = Cookie("jwt", "")
    cookie.maxAge = 0
    response.addCookie(cookie)
    return ResponseEntity.ok("Successfully logged out.")
  }
}