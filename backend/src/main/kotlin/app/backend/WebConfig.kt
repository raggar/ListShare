package app.backend

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.EnableWebMvc
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration // apply to all routes/controllers
@EnableWebMvc
class WebConfig : WebMvcConfigurer {

  override fun addCorsMappings(registry: CorsRegistry) {
    registry.addMapping("/**")
        .allowedOrigins("http://localhost:3000")
        .allowCredentials(true
        )
  }
}