import { useParams } from "react-router"
import Style from "./Login.module.css"
import { BoxInput } from "../../components/inputs/BoxInput"
import { Card } from "../../components/cards/Card"
import { handleSubmit } from "./Login.utils"
import { ButtonSubmit } from "../../components/buttons/ButtonSubmit"
import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"

export function Login () {
    let empresaParams = useParams()
    let empresa = empresaParams.empresa?.toLowerCase()
    const { login: loginContext } = useAuth()

    //valores do form
    const [dataForm, setDataForm] = useState({
        user: '',
        password: ''
    })

    //estado para mensagem de erro
    const [errorMessage, setErrorMessage] = useState<string | null>()

    // Zerar inputs quando mensagem de erro aparecer
    useEffect(() => {
        if (errorMessage) {
            setDataForm({
                user: '',
                password: ''
            })
        }
    }, [errorMessage])

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setDataForm((dataForm) => ({
            ...dataForm,
            [event.target.name]: event.target.value,
        }))
        
        // Limpar mensagem de erro quando o usuário começar a digitar
        if (errorMessage) {
            setErrorMessage(null)
        }
    }

    return (
        <>
            <Card>
                <h3 style={{textAlign: "center"}}>Fazer login</h3>
                <p style={{textAlign: "center"}}>Entre com suas credenciais para acessar o sistema.</p>
                
                {errorMessage && (
                    <div className={Style.errorMessage}>
                        {errorMessage}
                    </div>
                )}
                
                <form onSubmit={(e) => handleSubmit(e, dataForm, loginContext, empresa!, setErrorMessage)} className={Style.formLogin}>
                    <BoxInput 
                        type="text" 
                        placeholder="Usuário" 
                        label="Usuário" 
                        name="user"
                        value={dataForm.user}
                        onChange={handleChange}
                    />
                    <BoxInput 
                        type="password" 
                        placeholder="Senha" 
                        label="Senha" 
                        name="password"
                        value={dataForm.password}
                        onChange={handleChange}
                    />
                    <ButtonSubmit>Entrar</ButtonSubmit>
                </form>
            </Card>
            <footer className={Style.footer}>
                <p>© 2025 EmpresaREP - Todos os direitos reservados</p>
                <p>Suporte técnico: suporte@sistemarep.com</p>
            </footer>
        </>
        
    )
}