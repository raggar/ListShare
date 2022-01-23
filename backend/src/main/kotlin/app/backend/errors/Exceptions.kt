package app.backend.errors

class NoSuchUserException(message: String? = null, cause: Throwable? = null) : Exception(message, cause) {
  constructor(cause: Throwable?) : this(null, cause)
}

class InvalidPasswordException(message: String? = null, cause: Throwable? = null) : Exception(message, cause) {
  constructor(cause: Throwable?) : this(null, cause)
}
