package app.backend.repositories

import app.backend.models.DbProduct
import org.springframework.data.jpa.repository.JpaRepository

interface ProductRepository : JpaRepository<DbProduct, Int> {}