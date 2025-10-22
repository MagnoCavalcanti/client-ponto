import { createContext, useEffect, useState, type ReactNode } from "react";
import type { AuthContextType } from "../types/AuthContextType";
import { useNavigate } from "react-router";
import { loginRequest } from "../lib/apiLogin";
import type { User } from "../types/User";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  login: (_userData: User, _empresa?: any): Promise<boolean> => Promise.resolve(false),
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // carrega token salvo
    const savedToken = localStorage.getItem("sp:accessToken");
    if (savedToken) {
      setToken(savedToken);
      setUser({}); // ou buscar do backend
    }
  }, []);

  const login = async (userData: User, empresa: string): Promise<boolean> => {
    try {
      // 1. CHAMA A API DE LOGIN AQUI DENTRO DO CONTEXT
      // (Você precisará de uma versão da função de API que retorna o token ou a resposta)
      
      
      const token = await loginRequest(userData)

      
    

      
      
      localStorage.setItem("sp:accessToken", token.access_token);
      navigate(`/${empresa}/dashboard`); // Navegação DEVE ocorrer após o login BEM-SUCEDIDO
      
      return true; // Retorna sucesso
    } catch (error) {
      console.error("Erro ao fazer login via Context:", error);
      // Limpa ou mantém o estado como deslogado
      
      localStorage.removeItem("sp:accessToken");
      return false; // Retorna falha
    }
  };

  const logout = () => {

    localStorage.removeItem("sp:accessToken");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: !!token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}