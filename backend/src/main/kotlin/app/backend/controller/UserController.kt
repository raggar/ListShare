package app.backend.controller

import app.backend.dtos.CreateListDTO
import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbList
import app.backend.models.DbUser
import app.backend.services.UserService
import app.backend.util.decodeJwt
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
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

  @GetMapping("/{user_id}/lists")
  fun getLists(request: HttpServletRequest, @PathVariable("user_id") userId: String): ResponseEntity<List<DbList>> {
    decodeJwt(request)
    val user = userService.findByIdOrNull(userId.toInt()) ?: throw ResourceNotFoundException()
    return ResponseEntity.ok(user.lists)
  }

  @PostMapping("/add_list")
  fun addList(request: HttpServletRequest, @RequestBody body: CreateListDTO): ResponseEntity<DbList> {
    val decodedJwt = decodeJwt(request)
    val listToCreate = DbList()

    listToCreate.name = body.name
    listToCreate.shareLink = body.shareLink
    listToCreate.comment = body.comment

    val list = userService.addList(decodedJwt.issuer.toInt(), listToCreate)

    return ResponseEntity.ok(list)
  }
}