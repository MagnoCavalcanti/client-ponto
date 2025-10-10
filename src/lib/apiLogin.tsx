import type { User } from "../types/User";
import { apiLogin } from "./axios";

// src/services/authService.ts




interface LoginResponse {
  access_token: string;// se houver
  token_type: string;
  exp: string 
}

export async function login({ username, password }: User): Promise<boolean> {
  try {
    
    const response = await apiLogin.post<LoginResponse>("/login",
        { username, password }, // envia JSON
        {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }, // garante que é JSON
        }    
    );
    const { access_token } = response.data;
    

    // salva token para requisições futuras
    localStorage.setItem("sp:accessToken", access_token);

    return true;
  } catch (error: any) {
    console.error("Erro ao fazer login:", error.response?.data || error.message);
    throw error;
  }
}
