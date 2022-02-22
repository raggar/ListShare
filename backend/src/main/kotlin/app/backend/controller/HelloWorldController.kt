package app.backend.controller

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@RestController
@RequestMapping("/api/hello")
class HelloWorldController {

  @GetMapping("")
  fun helloWorld(request: HttpServletRequest, response: HttpServletResponse): ResponseEntity<String> {
    println("Hi")
    return ResponseEntity.ok("Hello World")
  }
}
