package app.backend.utils

import app.backend.JWT_SECRET
import app.backend.errors.UnauthenticatedException
import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import javax.servlet.http.HttpServletRequest

fun decodeJwt(request: HttpServletRequest): Claims {
  val jwt = request.getHeader("token") ?: throw UnauthenticatedException("Missing Jwt")
  return Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(jwt as String).body
}

fun encryptPassword(password: String): String {
  val passwordEncoder = BCryptPasswordEncoder()
  return passwordEncoder.encode(password)
}

fun comparePassword(valueOne: String, valueTwo: String): Boolean = BCryptPasswordEncoder().matches(valueOne, valueTwo)
