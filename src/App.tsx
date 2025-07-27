import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "./pages/Login/Login"

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}


