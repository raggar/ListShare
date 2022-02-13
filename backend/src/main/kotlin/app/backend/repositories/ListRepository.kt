package app.backend.repositories

import app.backend.models.DbList
import org.springframework.data.jpa.repository.JpaRepository

interface ListRepository : JpaRepository<DbList, Int> {
  fun findByCategory(category: String): List<DbList>
}