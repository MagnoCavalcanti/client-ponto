import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "./pages/Login/Login"
import { Index } from "./pages/Index"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { ErrorPage } from "./pages/Error/Error"

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:empresa" element={
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        } />
        <Route path="/:empresa/dashboard" element={
          <ProtectedRoute>
            <Index />
          </ProtectedRoute>
        } />
        <Route path="/:empresa/funcionarios" element={
          <ProtectedRoute>
            <Index />
          </ProtectedRoute>
        } />
        <Route path="/:empresa/dispositivos" element={
          <ProtectedRoute>
            <Index />
          </ProtectedRoute>
        } />
        
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}


