package app.backend.services

import app.backend.dtos.UpdateProductDTO
import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbProduct
import app.backend.repositories.ProductRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class ProductService(private val productRepository: ProductRepository) {
  fun findAll(): List<DbProduct> = productRepository.findAll()

  fun findByIdOrNull(id: Int): DbProduct? = productRepository.findByIdOrNull(id)

  fun deleteProduct(id: Int) = productRepository.deleteById(id)

  fun updateProduct(productId: Int, body: UpdateProductDTO): DbProduct {
    val product = productRepository.findByIdOrNull(productId) ?: throw ResourceNotFoundException()

    product.name = body.name ?: product.name
    product.productLink = body.productLink ?: product.productLink
    product.comment = body.comment ?: product.comment

    return productRepository.save(product)
  }
}