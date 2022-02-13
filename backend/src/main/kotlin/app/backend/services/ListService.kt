package app.backend.services

import app.backend.dtos.UpdateListDTO
import app.backend.errors.ResourceNotFoundException
import app.backend.models.DbList
import app.backend.repositories.ListRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class ListService(private val listRepository: ListRepository) {
  fun findAll(): MutableList<DbList> = listRepository.findAll()

  fun save(list: DbList): DbList = listRepository.save(list)

  fun findByIdOrNull(id: Int): DbList? = listRepository.findByIdOrNull(id)

  fun findByCategory(category: String): MutableList<DbList> = listRepository.findByCategory(category)

  fun deleteList(id: Int) = listRepository.deleteById(id)

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