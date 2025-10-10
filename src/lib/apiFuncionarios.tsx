// src/services/funcionarios.ts
import type { Funcionario } from "../types/Funcionario";
import api from "./axios";



// 🔹 Cria instância configurada do Axios


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
