package app.backend.errors

class UnauthenticatedException(message: String) : Exception(message)
class RegistrationException(message: String) : Exception(message)
class LoginException(message: String) : Exception(message)
class ResourceNotFoundException(message: String? = "Resource not found!") : Exception(message)