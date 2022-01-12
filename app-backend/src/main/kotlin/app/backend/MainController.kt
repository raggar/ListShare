package app.backend

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("api")
class MainController {

  @GetMapping
  fun root(): String = "Hello fellow user, wait there is nothing here......"
}