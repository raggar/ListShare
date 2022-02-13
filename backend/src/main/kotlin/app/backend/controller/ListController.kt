package app.backend.controller

import app.backend.dtos.UpdateListDTO
import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbList
import app.backend.services.ListService
import app.backend.utils.decodeJwt
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/api/lists")
class ListController(private val listService: ListService) {
  @GetMapping("")
  fun getAll(request: HttpServletRequest): ResponseEntity<MutableList<DbList>> {
    decodeJwt(request)
    return ResponseEntity.ok(listService.findAll())
  }

  @PutMapping("/{list_id}/update_list")
  fun updateList(request: HttpServletRequest, @PathVariable("list_id") listId: String, @RequestBody body: UpdateListDTO): ResponseEntity<DbList> {
    decodeJwt(request)
    val list = listService.updateList(listId.toInt(), body)
    return ResponseEntity.ok(list)
  }

  @PutMapping("/{list_id}/delete_list")
  fun deleteList(request: HttpServletRequest, @PathVariable("list_id") listId: String): ResponseEntity<String> {
    decodeJwt(request)
    listService.deleteList(listId.toInt())
    return ResponseEntity.ok("List successfully deleted.")
  }

  @GetMapping("/{list_id}")
  fun getList(request: HttpServletRequest, @PathVariable("list_id") listId: String): ResponseEntity<DbList> {
    decodeJwt(request)
    val list = listService.findByIdOrNull(listId.toInt()) ?: throw ResourceNotFoundException()
    return ResponseEntity.ok(list)
  }
}