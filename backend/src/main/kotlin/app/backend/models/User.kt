package app.backend.models

import com.fasterxml.jackson.annotation.JsonIgnore
import org.hibernate.annotations.CreationTimestamp
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import java.time.LocalDateTime
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class User {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  var id: Int = 0

  @Column
  var firstname: String = ""

  @Column
  var lastname: String = ""

  @Column(unique = true)
  var email: String = ""

  @Column
  var password: String = ""
    @JsonIgnore // ignore password field when returning a user
    get() = field
    set(value) {
      val passwordEncoder = BCryptPasswordEncoder()
      field = passwordEncoder.encode(value)
    }

  fun comparePassword(password: String): Boolean = BCryptPasswordEncoder().matches(password, this.password)
}