import api from "./core";

export interface RegisterUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export function registerUser(user: RegisterUser) {
  return api.post("/api/auth/register", user).then((response) => response.data);
}

export function loginUser(user: LoginUser) {
  return api.post("/api/auth/login", user).then((response) => response.data);
}
