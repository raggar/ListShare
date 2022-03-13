package app.backend.controllers

import app.backend.dtos.CreateListDTO
import app.backend.dtos.UpdateListDTO
import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbList
import app.backend.models.DbProduct
import app.backend.services.ListService
import app.backend.services.UserService
import app.backend.utils.decodeJwt
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/api/lists")
class ListController(private val userService: UserService, private val listService: ListService) {
  @GetMapping("/all")
  fun getAllLists(request: HttpServletRequest): ResponseEntity<List<DbList>> {
    decodeJwt(request)
    return ResponseEntity.ok(listService.findAll())
  }

  @GetMapping("/{list_id}")
  fun getList(request: HttpServletRequest, @PathVariable("list_id") listId: String): ResponseEntity<DbList> {
    decodeJwt(request)
    val list = listService.findByIdOrNull(listId.toInt()) ?: throw ResourceNotFoundException()
    return ResponseEntity.ok(list)
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
    val owner = userService.findByIdOrNull(decodedJwt.issuer.toInt()) ?: throw ResourceNotFoundException()

    val listToCreate = DbList(
        name = body.name,
        shareLink = body.shareLink,
        comment = body.comment,
        category = body.category,
        user = owner,
        products = mutableListOf<DbProduct>(),
    )

    return ResponseEntity.ok(listService.addList(listToCreate))
  }

  @PutMapping("/update/{list_id}")
  fun updateList(request: HttpServletRequest, @PathVariable("list_id") listId: String, @RequestBody body: UpdateListDTO): ResponseEntity<DbList> {
    decodeJwt(request)
    return ResponseEntity.ok(listService.updateList(listId.toInt(), body))
  }

  @PutMapping("/delete/{delete_list}")
  fun deleteList(request: HttpServletRequest, @PathVariable("list_id") listId: String): ResponseEntity<String> {
    decodeJwt(request)
    listService.deleteList(listId.toInt())
    return ResponseEntity.ok("List successfully deleted.")
  }
}
