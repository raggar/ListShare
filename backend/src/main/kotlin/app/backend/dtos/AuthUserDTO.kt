package app.backend.dtos

import app.backend.models.DbUser

class AuthUserDTO : DbUser() {
  var token = ""
}