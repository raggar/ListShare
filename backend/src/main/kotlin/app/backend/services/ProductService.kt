package app.backend.services

import app.backend.models.DbProduct
import app.backend.repositories.ProductRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class ProductService(private val productRepository: ProductRepository) {
  fun findAll(): List<DbProduct> = productRepository.findAll()

  fun findByIdOrNull(id: Int): DbProduct? = productRepository.findByIdOrNull(id)

  fun deleteProduct(id: Int) = productRepository.deleteById(id)
}