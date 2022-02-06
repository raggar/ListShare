package app.backend.repositories

import app.backend.models.DbUser
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<DbUser, Int> {
  fun findByEmail(email: String): DbUser?
}