package app.backend.repositories

import app.backend.models.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Int> {
  fun findByEmail(email: String): User?
}