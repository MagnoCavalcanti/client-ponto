import { useNavigate, useParams } from "react-router"
import Style from "./Login.module.css"
import { empresas } from "../../data/empresa.mock"
import { BoxInput } from "../../components/inputs/BoxInput"
import { Card } from "../../components/cards/Card"
import { handleSubmit } from "./Login.utils"
import { ButtonSubmit } from "../../components/buttons/ButtonSubmit"
import { useState } from "react"

export function Login () {
    let empresaParams = useParams()
    let empresa = empresaParams.empresa?.toLowerCase()
    let navigate = useNavigate()

    //valores do form
    const [dataForm, setDataForm] = useState({
        user: '',
        password: ''
    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setDataForm((dataForm) => ({
            ...dataForm,
            [event.target.name]: event.target.value,
        }))
        
    }

    if (empresas.find(empresaMock => empresaMock.nome.toLowerCase() == empresa) == undefined){
        return <h1>Errou a página otário!</h1>
    }

    return (
        <>
            <Card>
                <h3 style={{textAlign: "center"}}>Fazer login</h3>
                <p style={{textAlign: "center"}}>Entre com suas credenciais para acessar o sistema.</p>
                <form onSubmit={(e) => handleSubmit(e, dataForm, navigate, empresa!)} className={Style.formLogin}>
                    <BoxInput 
                        type="text" 
                        placeholder="Usuário" 
                        label="Usuário" 
                        name="user"
                        onChange={handleChange}
                    />
                    <BoxInput 
                        type="password" 
                        placeholder="Senha" 
                        label="Senha" 
                        name="password"
                        onChange={handleChange}
                    />
                    <ButtonSubmit>Entrar</ButtonSubmit>
                </form>
            </Card>
            <footer className={Style.footer}>
                <p>© 2025 EmpresaREP- Todos os direitos reservados</p>
                <p>Versão 0.0.1</p>
                <p>Suporte técnico: suporte@sistemarep.com</p>
            </footer>
        </>
        
    )
}