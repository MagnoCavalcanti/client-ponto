import { useParams } from "react-router"
import Style from "./Login.module.css"
import { empresas } from "../../data/mockEmpresa"
import { BoxInput } from "../../components/inputs/BoxInput"
import { Card } from "../../components/cards/Card"
import { handleSubmit } from "./Login.utils"
import { ButtonSubmit } from "../../components/buttons/ButtonSubmit"

export function Login () {
    let empresaParams = useParams()
    let empresa = empresaParams.empresa?.toLowerCase()
    console.log(empresaParams)

    if (empresas.find(empresaMock => empresaMock.nome.toLowerCase() == empresa) == undefined){
        return <h1>Errou a página otário!</h1>
    }

    return (
        <>
            <Card>
                <h3 style={{textAlign: "center"}}>Fazer login</h3>
                <p style={{textAlign: "center"}}>Entre com suas credenciais para acessar o sistema.</p>
                <form onSubmit={handleSubmit} className={Style.formLogin}>
                    <BoxInput type="text" placeholder="Usuário" label="Usuário"></BoxInput>
                    <BoxInput type="password" placeholder="Senha" label="Senha"></BoxInput>
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