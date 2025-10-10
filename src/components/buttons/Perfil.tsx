import { LogOut, Settings, User, UserRound } from "lucide-react"
import { useState } from "react"
import Style from "./Perfil.module.css"
import { handleQuit } from "./Perfil.utils"
import { useNavigate, useParams } from "react-router"

export const Perfil = () => {
    const navigate = useNavigate()
    let empresaParams = useParams()
    let empresa = empresaParams.empresa?.toLowerCase()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <>
            <button className={Style.perfilBotao} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <UserRound size={30}/>
            </button>
            {isDropdownOpen && (
              <div className={Style.dropdownContainer}>
                <div className={Style.userInfo}>
                  <div className={Style.userInfoContent}>
                    <p className={Style.userName}>Administrador</p>
                    <p className={Style.userEmail}>
                      admin@prefeitura.gov.br
                    </p>
                  </div>
                </div>
                <div className={Style.divider} />
                <button className={Style.dropdownButton}>
                  <User className={Style.dropdownButtonIcon} />
                  <span>Perfil</span>
                </button>
                <button className={Style.dropdownButton}>
                  <Settings className={Style.dropdownButtonIcon} />
                  <span>Configurações</span>
                </button>
                <div className={Style.divider} />
                <button className={Style.dropdownButton} onClick={() => handleQuit(navigate, empresa)}>
                  <LogOut className={Style.dropdownButtonIcon} />
                  <span>Sair</span>
                </button>
              </div>
            )}
        </>
    )
}