package app.backend.models

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.Table

@Entity(name = "DbProduct")
@Table(name = "db_products")
class DbProduct {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  val id: Int = 0

  @Column(nullable = false)
  var name: String = ""

  @Column(nullable = false)
  var productLink: String = ""

  @Column(nullable = false)
  var comment: String = ""

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "list_id", nullable = false)
  @JsonIgnore
  lateinit var list: DbList
}