export interface Funcionario {
    id: number
    nome: string
    matricula: number
    pis: number
    empresa_id: number
    funcao?: string
    grupo?: string
    cpf: string
}