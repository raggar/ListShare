package app.backend.errors

import org.springframework.http.HttpStatus
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.time.format.FormatStyle

data class ApiError(
    private val _message: String?,
    val status: HttpStatus = HttpStatus.BAD_REQUEST,
    val code: Int = status.value(),
    val timeStamp: String = LocalDateTime.now()
        .format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM)),
) {
  val message: String
    get() = _message ?: "Something went wrong"
}

