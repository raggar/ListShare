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

  fun addList(list: DbList) = listRepository.save(list)

  fun updateList(listId: Int, body: UpdateListDTO): DbList? {
    val list = listRepository.findByIdOrNull(listId) ?: throw ResourceNotFoundException()

    list.name = body.name ?: list.name
    list.category = body.category ?: list.category
    list.shareLink = body.shareLink ?: list.shareLink
    list.comment = body.comment ?: list.comment

    return listRepository.save(list)
  }
}