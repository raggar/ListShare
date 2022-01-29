package app.backend.errors

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.HttpRequestMethodNotSupportedException
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.servlet.NoHandlerFoundException

open class DefaultErrorHandler {
  @ExceptionHandler(NoSuchElementException::class)
  fun handleNotFound(e: NoSuchElementException): ResponseEntity<ApiError> =
      ResponseEntity(ApiError(e.message, HttpStatus.NOT_FOUND), HttpStatus.NOT_FOUND)

  @ExceptionHandler(IllegalArgumentException::class)
  fun handleIllegalArgument(e: IllegalArgumentException): ResponseEntity<ApiError> =
      ResponseEntity(ApiError(e.message, HttpStatus.BAD_REQUEST), HttpStatus.BAD_REQUEST)

  @ExceptionHandler(MethodArgumentNotValidException::class)
  fun handleInvalidMethodArgument(e: MethodArgumentNotValidException): ResponseEntity<ApiError> =
      ResponseEntity(ApiError(e.message, HttpStatus.UNPROCESSABLE_ENTITY), HttpStatus.UNPROCESSABLE_ENTITY)

  @ExceptionHandler(NoHandlerFoundException::class)
  fun handleNoHandlerFound(e: NoHandlerFoundException): ResponseEntity<ApiError> =
      ResponseEntity(ApiError(e.message, HttpStatus.NOT_FOUND), HttpStatus.NOT_FOUND)

  @ExceptionHandler(HttpRequestMethodNotSupportedException::class)
  fun handleMethodNotSupported(e: HttpRequestMethodNotSupportedException): ResponseEntity<ApiError> =
      ResponseEntity(ApiError(e.message, HttpStatus.METHOD_NOT_ALLOWED), HttpStatus.METHOD_NOT_ALLOWED)
}