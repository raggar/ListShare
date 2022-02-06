package app.backend.services

import app.backend.models.DbList
import app.backend.repositories.ListRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service

@Service
class ListService(private val listRepository: ListRepository) {
  fun findAll(): MutableList<DbList> = listRepository.findAll()

  fun save(list: DbList): DbList = listRepository.save(list)

  fun findByIdOrNull(id: Int?): DbList? = listRepository.findByIdOrNull(id)

  fun findByCategory(category: String): MutableList<DbList> = listRepository.findByCategory(category)
}