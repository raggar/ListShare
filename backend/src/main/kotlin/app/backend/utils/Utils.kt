package app.backend.utils

import app.backend.JWT_SECRET
import io.jsonwebtoken.Claims
import io.jsonwebtoken.Jwts

fun isEmailValid(email: String): Boolean = "^[A-Za-z](.*)([@]{1})(.{1,})(\\.)(.{1,})".toRegex().matches(email)
fun capitalize(name: String): String = name[0].uppercase() + name.substring(1).lowercase()

fun cleanName(name: String) = capitalize(name.trim())
fun cleanEmail(email: String) = email.trim().lowercase()
fun cleanPassword(password: String) = password.trim()

fun decodeJwt(jwt: String): Claims = Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(jwt).body