package app.backend.controller

import app.backend.dtos.LoginDTO
import app.backend.dtos.RegisterDTO
import app.backend.errors.InvalidPasswordException
import app.backend.errors.NoSuchUserException
import app.backend.models.User
import app.backend.services.UserService
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

  @GetMapping("user")
  fun user(@CookieValue("jwt") jwt: String?): ResponseEntity<Any> {
    jwt ?: return ResponseEntity.status(401).body("unauthenticated")

    val body = Jwts.parser().setSigningKey("secret").parseClaimsJws(jwt).body

    return ResponseEntity.ok(userService.getById(body.issuer.toInt()))
  }

  @PostMapping("register")
  fun register(@RequestBody body: RegisterDTO): ResponseEntity<User> {
    val user = User()
    user.name = body.name
    user.email = body.email
    user.password = body.password

    return ResponseEntity.ok(userService.save(user))
  }

  @PostMapping("login")
  fun login(@RequestBody body: LoginDTO, response: HttpServletResponse): ResponseEntity<Any> {
    val user = userService.findByEmail(body.email)
        ?: throw NoSuchUserException("User with email ${body.email} not found!")

    if (!user.comparePassword(body.password)) {
      throw InvalidPasswordException("Invalid password entered for ${body.email}!")
    }

    val issuer = user.id.toString()

    val jwt = Jwts.builder()
        .setIssuer(issuer)
        .setExpiration(Date(System.currentTimeMillis() + 60 * 24 * 1000))
        .signWith(SignatureAlgorithm.ES512, "secret") // 1 day
        .compact()

    val cookie = Cookie("jwt", jwt)
    cookie.isHttpOnly = true

    response.addCookie(cookie)

    return ResponseEntity.ok("Success")
  }

  @PostMapping("logout")
  fun logout(response: HttpServletResponse): ResponseEntity<Any> {
    val cookie = Cookie("jwt", "")
    cookie.maxAge = 0
    response.addCookie(cookie)
    return ResponseEntity.ok("Success")
  }
}