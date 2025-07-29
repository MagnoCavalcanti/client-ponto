import { useParams } from "react-router"
import { empresas } from "../data/empresa.mock"
import { ErrorPage } from "../pages/Error/Error"

interface ProtectedRouteProps {
    children: React.ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { empresa } = useParams()
    
    // Verifica se a empresa existe
    const empresaExiste = empresas.find(
        empresaMock => empresaMock.nome.toLowerCase() === empresa?.toLowerCase()
    )

    if (!empresaExiste) {
        return <ErrorPage/>
    }

    return <>{children}</>
} 