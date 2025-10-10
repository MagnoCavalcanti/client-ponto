// src/services/funcionarios.ts
import axios from "axios";
import type { Funcionario } from "../types/Funcionario";


// 🔹 Cria instância configurada do Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:8000", // URL da sua API FastAPI
  withCredentials: false, // deixe true apenas se usar cookies httpOnly
});

// 🔹 Interceptor: adiciona o token antes de cada requisição
api.interceptors.request.use((config) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc2MDA3ODc5MX0.B8EY2Xcv4fP47EZfQj4pvuZri30Y4UOhDGqPqR6weZk";

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 🔹 Função para buscar funcionários
export async function getFuncionarios(): Promise<Funcionario[]> {
  try {
    // Aqui você usa a instância `api` configurada com o token
    const response = await api.get<Funcionario[]>("/Apple/funcionarios/");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar funcionários:", error);
    throw error; 
  }
}
