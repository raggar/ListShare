package app.backend.services

import app.backend.errors.ResourceNotFoundException
import app.backend.errors.UnauthenticatedException
import app.backend.models.DbList
import app.backend.models.DbUser
import app.backend.repositories.ListRepository
import app.backend.repositories.UserRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository, private val listRepository: ListRepository) {
  fun findAll(): MutableList<DbUser> = userRepository.findAll()

  fun save(user: DbUser): DbUser = userRepository.save(user)

  fun findByEmail(email: String): DbUser? = userRepository.findByEmail(email)

  fun findByIdOrNull(id: Int): DbUser? = userRepository.findByIdOrNull(id)

  fun addList(userId: Int, list: DbList): DbList {
    val user = userRepository.findByIdOrNull(userId) ?: throw ResourceNotFoundException()
    list.user = user
    return listRepository.save(list)
  }
}