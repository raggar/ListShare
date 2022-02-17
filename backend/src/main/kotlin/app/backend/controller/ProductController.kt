package app.backend.controller

import app.backend.dtos.UpdateProductDTO
import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbProduct
import app.backend.services.ProductService
import app.backend.util.decodeJwt
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.servlet.http.HttpServletRequest

@RestController
@RequestMapping("/api/products")
class ProductController(private val productService: ProductService) {
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

  @PutMapping("/update/{product_id}")
  fun updateProduct(request: HttpServletRequest, @PathVariable("product_id") productId: String, @RequestBody body: UpdateProductDTO): ResponseEntity<DbProduct> {
    decodeJwt(request)
    val product = productService.updateProduct(productId.toInt(), body)
    return ResponseEntity.ok(product)
  }
}