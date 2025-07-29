import { Perfil } from "../buttons/Perfil"
import Style from "./Header.module.css"

export const Header = () => {
    return (
        <header className={Style.background}>
            <div className={Style.headerLeft}>
                <h1 className={Style.title}>Sistema REP</h1>
                <p className={Style.paragraph}>Gerenciador de Ponto Eletrônico</p>
            </div>
            <div>
                <Perfil/>
            </div>
        </header>
    )
}