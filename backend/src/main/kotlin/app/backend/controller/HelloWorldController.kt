package app.backend.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api")
class HelloWorldController {

  @GetMapping("hello")
  fun helloWorld(): String = "Hello user, wait there is nothing here..."
}