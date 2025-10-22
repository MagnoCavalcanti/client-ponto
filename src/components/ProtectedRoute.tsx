import { Navigate, useLocation, useParams } from "react-router"
import { empresas } from "../data/empresa.mock"
import { ErrorPage } from "../pages/Error/Error"
import { useAuth } from "../hooks/useAuth"

interface ProtectedRouteProps {
    children: React.ReactNode
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { empresa } = useParams()
    const { pathname } = useLocation()
    const { isAuthenticated } = useAuth()
    
    // Verifica se a empresa existe
    const empresaExiste = empresas.find(
        empresaMock => empresaMock.nome.toLowerCase() === empresa?.toLowerCase()
    )

    if (!empresaExiste) {
        return <ErrorPage/>
    }else if (pathname === `/${empresa}`){ //verifica se a rota é a de login
        return <>{children}</>
    }
    

    return isAuthenticated ? <>{children}</> : <Navigate to={`/${empresa}`} replace />;

} 