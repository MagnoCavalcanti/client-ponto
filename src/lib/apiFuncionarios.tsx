import axios from "axios"

export async function getFuncionarios() {
    let url = "http://localhost:8000"
    try{
        const response = await axios.get(`${url}/Wonka/funcionarios/`)
        const data = response.data
        return data
    }catch(e){
        console.error(e);
    }
} 
