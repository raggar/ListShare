package app.backend.services

import app.backend.dtos.UpdateListDTO
import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbList
import app.backend.models.DbProduct
import app.backend.repositories.ListRepository
import app.backend.repositories.ProductRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class ListService(private val listRepository: ListRepository, private val productRepository: ProductRepository) {
  fun findAll(): List<DbList> = listRepository.findAll()

  fun findByIdOrNull(id: Int): DbList? = listRepository.findByIdOrNull(id)

  fun deleteList(id: Int) = listRepository.deleteById(id)

  fun addProduct(listId: Int, product: DbProduct): DbProduct {
    val list = listRepository.findByIdOrNull(listId) ?: throw ResourceNotFoundException()
    product.list = list
    return productRepository.save(product)
  }

  fun updateList(listId: Int, body: UpdateListDTO): DbList? {
    val list = listRepository.findByIdOrNull(listId) ?: throw ResourceNotFoundException()

    if (body.name != null) {
      list.name = body.name
    }

    if (body.shareLink != null) {
      list.shareLink = body.shareLink
    }

    if (body.comment != null) {
      list.comment = body.comment
    }

    return listRepository.save(list)
  }
}