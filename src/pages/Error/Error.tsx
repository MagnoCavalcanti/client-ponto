import { TriangleAlert } from "lucide-react"
import Style from "./Error.module.css"

export const ErrorPage = () => {
    return(
        <div className={Style.background}>
            <TriangleAlert size={90} color="red"/>
            <h1 className={Style.title}>
                URL não encontrada!
            </h1>
            <p className={Style.description}>
                Verifique a URL e tente novamente.
            </p>
        </div>
    )
}