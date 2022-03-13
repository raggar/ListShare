package app.backend.dtos

class AuthUserDTO(
    val id: Int,
    val token: String,
    val firstname: String,
    val lastname: String,
    val email: String,
)