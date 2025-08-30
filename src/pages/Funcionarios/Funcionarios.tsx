import { useState } from "react"
import Style from "./Funcionario.module.css"
import InputStyle from "../../components/inputs/BoxInput.module.css"
import { employees } from "../../data/register.mock"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/tables/Table"
import { ButtonSubmit } from "../../components/buttons/ButtonSubmit"
import { Plus } from "lucide-react"

export const Funcionarios = () => {
    const [ searchBar, setSearchBar ] = useState("")
    console.log(searchBar);
    

    const keysEmployees = Object.keys(employees[0])
    const filterEmployees = employees.filter(employee => employee.name.toLowerCase().includes(searchBar.toLowerCase()))

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
                                .filter((key) => key !== "id")
                                .map((key) => (
                                    <TableHead key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</TableHead>
                                ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filterEmployees.map((employee) => (
                            <TableRow key={employee.id}>
                                {Object.entries(employee)
                                    .filter(([key]) => key !== "id")
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