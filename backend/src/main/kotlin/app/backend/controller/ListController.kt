package app.backend.controller

import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbList
import app.backend.services.ListService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CookieValue
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/lists")
class ListController(private val listService: ListService) {
  @GetMapping("")
  fun getAll(@CookieValue("jwt") jwt: String?): ResponseEntity<MutableList<DbList>> {
    return ResponseEntity.ok(listService.findAll())
  }

  @GetMapping("/{list_id}")
  fun getList(@CookieValue("jwt") jwt: String?, @PathVariable("list_id") listId: String): ResponseEntity<DbList> {
    val list = listService.findByIdOrNull(listId.toInt()) ?: throw ResourceNotFoundException()
    return ResponseEntity.ok(list)
  }
}