package app.backend.controller

import app.backend.JWT_SECRET
import app.backend.dtos.LoginDTO
import app.backend.dtos.RegisterDTO
import app.backend.errors.LoginException
import app.backend.errors.RegistrationException
import app.backend.models.DbUser
import app.backend.services.UserService
import app.backend.utils.cleanEmail
import app.backend.utils.cleanName
import app.backend.utils.cleanPassword
import app.backend.utils.isEmailValid
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.SignatureAlgorithm
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.Date
import javax.servlet.http.Cookie
import javax.servlet.http.HttpServletResponse

@RestController
@RequestMapping("api/auth")
class AuthController(private val userService: UserService) {

  @PostMapping("register")
  fun register(@RequestBody body: RegisterDTO): ResponseEntity<DbUser> {
    val user = DbUser()

    user.firstname = cleanName(body.firstname)
    user.lastname = cleanName(body.lastname)
    user.email = cleanEmail(body.email)
    user.password = cleanPassword(body.password)

    if (!isEmailValid(user.email)) {
      throw RegistrationException("Email is invalid!")
    }

    if (userService.findByEmail(user.email) != null) {
      throw RegistrationException("Email in use!")
    }

    return ResponseEntity.ok(userService.save(user))
  }

  @PostMapping("login")
  fun login(@RequestBody body: LoginDTO, response: HttpServletResponse): ResponseEntity<DbUser> {
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
        .signWith(SignatureAlgorithm.HS512, JWT_SECRET) // 1 day
        .compact()

    val cookie = Cookie("jwt", jwt)
    cookie.isHttpOnly = true

    response.addCookie(cookie)

    return ResponseEntity.ok(user)
  }

  @PostMapping("logout")
  fun logout(response: HttpServletResponse): ResponseEntity<String> {
    val cookie = Cookie("jwt", "")
    cookie.maxAge = 0
    response.addCookie(cookie)
    return ResponseEntity.ok("Successfully logged out.")
  }
}