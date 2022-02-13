package app.backend.errors

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestControllerAdvice

@RestControllerAdvice
class GlobalExceptionHandler : DefaultErrorHandler() {
  @ExceptionHandler(UnauthenticatedException::class)
  fun handleUnauthenticated(e: UnauthenticatedException): ResponseEntity<ApiError> =
      ResponseEntity(ApiError(e.message), HttpStatus.UNAUTHORIZED)

  @ExceptionHandler(RegistrationException::class)
  fun handleRegistrationException(e: RegistrationException): ResponseEntity<ApiError> =
      ResponseEntity(ApiError(e.message), HttpStatus.UNAUTHORIZED)

  @ExceptionHandler(ResourceNotFoundException::class)
  fun handleResourceNotFoundException(e: ResourceNotFoundException): ResponseEntity<ApiError> =
      ResponseEntity(ApiError(e.message), HttpStatus.NOT_FOUND)

  @ExceptionHandler(LoginException::class)
  fun handleLoginException(e: LoginException): ResponseEntity<ApiError> =
      ResponseEntity(ApiError(e.message), HttpStatus.UNAUTHORIZED)
}