package app.backend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
import org.springframework.boot.runApplication

@SpringBootApplication(exclude = [SecurityAutoConfiguration::class]) // by default spring security locks all routes
class Application

fun main(args: Array<String>) {
  runApplication<Application>(*args)
}
