package app.backend.utils

import app.backend.errors.UnauthenticatedException
import org.springframework.web.servlet.HandlerInterceptor
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

val nonAuthenticatedRoutes: List<String> = listOf(
    "/api/hello",
    "/api/login",
    "/api/register"
)

class AuthInterceptor : HandlerInterceptor {
  @Override
  override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
    if (!nonAuthenticatedRoutes.contains(request.requestURI)) {
      val jwt = request.cookies.singleOrNull { it.name == "jwt" }
          ?: throw UnauthenticatedException("Missing JWT token!")
      try {
        decodeJwt(jwt.value)
      } catch (e: Exception) {
        throw UnauthenticatedException(e.message ?: "Invalid, missing, or expired JWT token!")
      }
    }
    return super.preHandle(request, response, handler)
  }
}