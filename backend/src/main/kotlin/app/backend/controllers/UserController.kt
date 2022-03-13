package app.backend.controllers

import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbUser
import app.backend.services.UserService
import app.backend.utils.decodeJwt
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/api/users")
class UserController(private val userService: UserService) {
  @GetMapping("/all")
  fun getAllUsers(request: HttpServletRequest): ResponseEntity<List<DbUser>> {
    decodeJwt(request)
    return ResponseEntity.ok(userService.findAll())
  }

  @GetMapping("/me")
  fun user(request: HttpServletRequest): ResponseEntity<DbUser> {
    val decodedJwt = decodeJwt(request)
    val user = userService.findByIdOrNull(decodedJwt.issuer.toInt()) ?: throw ResourceNotFoundException()
    return ResponseEntity.ok(user)
  }
}