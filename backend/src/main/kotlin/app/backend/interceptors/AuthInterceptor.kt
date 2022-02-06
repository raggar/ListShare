package app.backend.interceptors

import app.backend.errors.UnauthenticatedException
import app.backend.utils.decodeJwt
import org.springframework.stereotype.Component
import org.springframework.web.servlet.HandlerInterceptor
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class AuthInterceptor : HandlerInterceptor {
  override fun preHandle(request: HttpServletRequest, response: HttpServletResponse, handler: Any): Boolean {
    try {
      val jwt = request.cookies.single { it.name == "jwt" }
      val decodedToken = decodeJwt(jwt = jwt.value)
      request.setAttribute("user_request_id", decodedToken.issuer.toInt())
    } catch (e: Exception) {
      throw UnauthenticatedException(e.message ?: "Invalid or missing JWT")
    }
    return true
  }
}