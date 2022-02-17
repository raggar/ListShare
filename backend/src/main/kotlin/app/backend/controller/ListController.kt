package app.backend.controller

import app.backend.dtos.CreateProductDTO
import app.backend.dtos.UpdateListDTO
import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbList
import app.backend.models.DbProduct
import app.backend.services.ListService
import app.backend.util.decodeJwt
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
class ListController(private val listService: ListService) {
  @GetMapping("/all")
  fun getAllLists(request: HttpServletRequest): ResponseEntity<List<DbList>> {
//    decodeJwt(request)
    return ResponseEntity.ok(listService.findAll())
  }

  @GetMapping("/{list_id}")
  fun getList(request: HttpServletRequest, @PathVariable("list_id") listId: String): ResponseEntity<DbList> {
    decodeJwt(request)
    val list = listService.findByIdOrNull(listId.toInt()) ?: throw ResourceNotFoundException()
    return ResponseEntity.ok(list)
  }

  @PostMapping("/add_product")
  fun addProduct(request: HttpServletRequest, @RequestBody body: CreateProductDTO): ResponseEntity<DbProduct> {
    val decodedJwt = decodeJwt(request)
    val productToCreate = DbProduct()

    productToCreate.name = body.name
    productToCreate.comment = body.comment
    productToCreate.productLink = body.productLink

    val list = listService.addProduct(decodedJwt.issuer.toInt(), productToCreate)

    return ResponseEntity.ok(list)
  }

  @PutMapping("/update/{list_id}")
  fun updateList(request: HttpServletRequest, @PathVariable("list_id") listId: String, @RequestBody body: UpdateListDTO): ResponseEntity<DbList> {
    decodeJwt(request)
    val list = listService.updateList(listId.toInt(), body)
    return ResponseEntity.ok(list)
  }

  @PutMapping("/delete/{delete_list}")
  fun deleteList(request: HttpServletRequest, @PathVariable("list_id") listId: String): ResponseEntity<String> {
    decodeJwt(request)
    listService.deleteList(listId.toInt())
    return ResponseEntity.ok("List successfully deleted.")
  }
}
