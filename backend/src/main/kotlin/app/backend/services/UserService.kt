package app.backend.services

import app.backend.models.User
import app.backend.repositories.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {
  fun save(user: User): User = userRepository.save(user)

  fun findByEmail(email: String): User? = userRepository.findByEmail(email)

  @Suppress("DEPRECATION")
  fun getById(id: Int): User = userRepository.getById(id)
}