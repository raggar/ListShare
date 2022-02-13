package app.backend.controller

import app.backend.dtos.CreateListDTO
import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbList
import app.backend.models.DbUser
import app.backend.services.UserService
import app.backend.utils.decodeJwt
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CookieValue
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/users")
class UserController(private val userService: UserService) {
  @GetMapping("")
  fun getAll(@CookieValue("jwt") jwt: String?): ResponseEntity<MutableList<DbUser>> {
    decodeJwt(jwt)
    return ResponseEntity.ok(userService.findAll())
  }

  @GetMapping("/me")
  fun user(@CookieValue("jwt") jwt: String?): ResponseEntity<DbUser> {
    val decodedJwt = decodeJwt(jwt)
    val user = userService.findByIdOrNull(decodedJwt.issuer.toInt()) ?: throw ResourceNotFoundException()
    return ResponseEntity.ok(user)
  }

  @GetMapping("/{user_id}/lists")
  fun getLists(@CookieValue("jwt") jwt: String?, @PathVariable("user_id") userId: String): ResponseEntity<MutableList<DbList>> {
    decodeJwt(jwt)
    val user = userService.findByIdOrNull(userId.toInt()) ?: throw ResourceNotFoundException()
    return ResponseEntity.ok(user.lists)
  }

  @PostMapping("/me/add_list")
  fun addList(@CookieValue("jwt") jwt: String?, @RequestBody body: CreateListDTO): ResponseEntity<Any> {
    val decodedJwt = decodeJwt(jwt)
    val listToCreate = DbList()
    listToCreate.name = body.name
    listToCreate.shareLink = body.shareLink
    listToCreate.comment = body.comment

    val list = userService.addList(decodedJwt.issuer.toInt(), listToCreate)

    return ResponseEntity.ok(list)
  }
}