import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "./pages/Login/Login"
import { Index } from "./pages/Index"

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:empresa" element={<Login />} />
        <Route path="/:empresa/dashboard" element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}


