package app.backend.models

import com.fasterxml.jackson.annotation.JsonIgnore
import javax.persistence.CascadeType
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.FetchType
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.JoinColumn
import javax.persistence.ManyToOne
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity(name = "DbList")
@Table(name = "db_lists")
class DbList (
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  val id: Int = 0,

  @Column(nullable = false)
  var name: String,

  @Column(nullable = false)
  var shareLink: String,

  @Column(nullable = false)
  var comment: String,

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "user_id", nullable = false)
  @JsonIgnore
  val user: DbUser,

  @Column(nullable = false)
  var category: String,

  @OneToMany(mappedBy = "list", fetch = FetchType.LAZY, cascade = [CascadeType.ALL])
  val products: MutableList<DbProduct>,
)