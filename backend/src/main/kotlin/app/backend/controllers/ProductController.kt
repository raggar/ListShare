package app.backend.controllers

import app.backend.dtos.CreateProductDTO
import app.backend.dtos.UpdateProductDTO
import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbProduct
import app.backend.services.ListService
import app.backend.services.ProductService
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
@RequestMapping("/api/products")
class ProductController(private val listService: ListService, private val productService: ProductService) {
  @GetMapping("/all")
  fun getAllProducts(request: HttpServletRequest): ResponseEntity<List<DbProduct>> {
    decodeJwt(request)
    return ResponseEntity.ok(productService.findAll())
  }

  @GetMapping("/{product_id}")
  fun getProduct(request: HttpServletRequest, @PathVariable("product_id") productId: String): ResponseEntity<DbProduct> {
    decodeJwt(request)
    val product = productService.findByIdOrNull(productId.toInt()) ?: throw ResourceNotFoundException()
    return ResponseEntity.ok(product)
  }

  @PutMapping("/delete/{product_id}")
  fun deleteProduct(request: HttpServletRequest, @PathVariable("product_id") productId: String): ResponseEntity<String> {
    decodeJwt(request)
    productService.deleteProduct(productId.toInt())
    return ResponseEntity.ok("Product successfully deleted.")
  }

  @PostMapping("/{list_id}/add_product")
  fun addProduct(request: HttpServletRequest, @PathVariable("list_id") listId: String, @RequestBody body: CreateProductDTO): ResponseEntity<DbProduct> {
    decodeJwt(request)
    val parentList = listService.findByIdOrNull(listId.toInt()) ?: throw ResourceNotFoundException()

    val productToCreate = DbProduct(
        name = body.name,
        comment = body.comment,
        productLink = body.productLink,
        list = parentList,
    )

    return ResponseEntity.ok(productService.addProduct(productToCreate))
  }

  @PutMapping("/update/{product_id}")
  fun updateProduct(request: HttpServletRequest, @PathVariable("product_id") productId: String, @RequestBody body: UpdateProductDTO): ResponseEntity<DbProduct> {
    decodeJwt(request)
    val product = productService.updateProduct(productId.toInt(), body)
    return ResponseEntity.ok(product)
  }
}