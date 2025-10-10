import Style from "./CardInfo.module.css"
import type { Device } from "../../pages/Dispositivos/Dispositivos"

interface CardInfoProps {
    item: Device
}
export const CardInfo = ({ item }: CardInfoProps) => {
    return(
        <>

            <h3>{item.nome}</h3>

            <hr className={Style.divider}/>
                <p className={Style.legend}>Informações gerais</p>
                <div className={Style.boxInput}>
                    <label htmlFor="modelo">Modelo: </label>
                    <select name="modelo" id="modelo" disabled></select>
                </div>
                <div className={Style.boxInput}>
                    <label htmlFor="Ip">Ip: </label>
                    <input disabled type="text" name="Ip" id="Ip" />
                </div>
                <div className={Style.boxInput}>
                    <label htmlFor="localizacao">Localização: </label>
                    <input disabled type="text" name="localizacao" id="localizacao" />
                </div>
                <div className={Style.boxInput}>
                    <label htmlFor="user">Usuário: </label>
                    <input disabled type="text" name="user" id="user" />
                </div>
                <div className={Style.boxInput}>
                    <label htmlFor="senha">Senha: </label>
                    <input disabled type="password" name="senha" id="senha" />
                </div>
            <hr className={Style.divider}/>
                <p className={Style.legend}>Ações rápidas</p>
                

            
        </>
    )
}
