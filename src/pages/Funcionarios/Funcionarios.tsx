import { useEffect, useState } from "react"
import Style from "./Funcionario.module.css"
import InputStyle from "../../components/inputs/BoxInput.module.css"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/tables/Table"
import { ButtonSubmit } from "../../components/buttons/ButtonSubmit"
import { Plus } from "lucide-react"
import { getFuncionarios } from "../../lib/apiFuncionarios"

interface Employee {
    id: number;
    nome: string;
    matricula: number;
    pis: number;
    empresa_id: number;
    funcao: string;
    grupo: string;
    cpf: string; 
}

export const Funcionarios = () => {
    const [ searchBar, setSearchBar ] = useState("")
    const [ employees, setEmployees ] = useState<Employee[]>([])
    
    
    useEffect(() => {
        console.log("teste de dentro");
        
        const request = async () => {
            console.log("teste de dentro da promisse");
            
            try {
                const funcionarios = await getFuncionarios()
                console.log("funcionarios" + funcionarios);
                
                setEmployees(funcionarios)
            } catch (error) {
                console.error("Erro no useEffect:", error);
            }
        }
        request()
    }, [])

    

    const keysEmployees = employees.length > 0 ? Object.keys(employees[0]) : [] //fznd verificação para não impedir a requisição a API
    const filterEmployees = employees.filter(employee => employee.nome.toLowerCase().includes(searchBar.toLowerCase()))

    return (
        <>
            <div className={Style.headerFuncionarios}>
                <div>
                    <h1 className={Style.title}>Funcionários</h1>
                    <p className={Style.subtitle}>Gerencie os funcionários cadastrados no sistema</p>
                </div>

                <ButtonSubmit icon={Plus}>
                    Novo Funcionário
                </ButtonSubmit>
            </div>  

            <div className={Style.card}>
                <h3 style={{ fontSize: "20px", marginBottom: "5px"}}>Lista de funcionários</h3>
                <input type="text" name="searchBar" id="searchBar" className={InputStyle.input} style={{ width: "600px", fontSize: "15px"}} placeholder="Buscar Funcionário..." value={searchBar} onChange={(e) => {setSearchBar(e.target.value)}}/> 

                <Table>
                    <TableHeader>
                        <TableRow>
                            {keysEmployees
                                .filter((key) => key !== "id" && key !== "empresa_id")
                                .map((key) => (
                                    <TableHead key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</TableHead>
                                ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filterEmployees.map((employee) => (
                            <TableRow key={employee.id}>
                                {Object.entries(employee)
                                    .filter(([key]) => key !== "id" && key !== "empresa_id")
                                    .map(([_, valor], idx) => (
                                        <TableCell key={idx}>{valor}</TableCell>
                                    ))}
                            </TableRow>
                        ))}
                    </TableBody>
                    
                </Table>
            </div>
        </>
    )
}