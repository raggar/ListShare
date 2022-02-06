package app.backend.controller

import app.backend.dtos.CreateListDTO
import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbList
import app.backend.models.DbUser
import app.backend.services.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CookieValue
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestAttribute
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api/users/")
class UserController(private val userService: UserService) {
  @GetMapping("/")
  fun getAll(@CookieValue("jwt") jwt: String?): ResponseEntity<MutableList<DbUser>> {
    return ResponseEntity.ok(userService.findAll())
  }

  @GetMapping("me")
  fun user(@RequestAttribute("request_user_id") requestUserId: Int, @CookieValue("jwt") jwt: String?): ResponseEntity<DbUser> {
    val user = userService.findByIdOrNull(requestUserId) ?: throw ResourceNotFoundException()
    return ResponseEntity.ok(user)
  }

  @GetMapping("/{user_id}/lists")
  fun getLists(@CookieValue("jwt") jwt: String?, @PathVariable("user_id") userId: String): ResponseEntity<MutableList<DbList>> {
    val user = userService.findByIdOrNull(userId.toInt()) ?: throw ResourceNotFoundException()
    return ResponseEntity.ok(user.lists)
  }

  @PostMapping("/{user_id}/add_list")
  fun addList(@CookieValue("jwt") jwt: String?, @RequestBody body: CreateListDTO, @PathVariable("user_id") userId: String): ResponseEntity<Any> {
    val listToCreate = DbList()
    listToCreate.name = body.name
    listToCreate.shareLink = body.shareLink
    listToCreate.comment = body.comment

    val list = userService.addList(userId.toInt(), listToCreate)

    return ResponseEntity.ok(list)
  }
}