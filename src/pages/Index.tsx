import { useLocation, useParams } from "react-router";
import { Header } from "../components/header/Header";
import { SideBar } from "../components/sidebar/SideBar";
import { ErrorPage } from "./Error/Error";
import { Dashboard } from "./Dashboard/Dashboard";
import { Funcionarios } from "./Funcionarios/Funcionarios";
import { Dispositivos } from "./Dispositivos/Dispositivos";

export function Index() {
    const enterprise = useParams()
    const location = useLocation()
    

    const renderPage = () => {
        switch(location.pathname){
            case `/${enterprise.empresa}/dashboard`:
                return <Dashboard/>
            case `/${enterprise.empresa}/funcionarios`:
                return <Funcionarios/>
            case `/${enterprise.empresa}/dispositivos`:
                return <Dispositivos/>

            default:
                return <ErrorPage/>//retirar depois, já que é redundante
        }
    }
    return (
        <div style={{ paddingTop: '80px' }}>
            <Header></Header>
            <div style={{ marginTop: "20px", top: "124px"}}>
                <SideBar></SideBar>
                <main style={{
                    marginLeft: "300px",
                    paddingTop: "10px",
                    minHeight: "calc(100vh - 114px)",
                    width: "calc(100vw - 325px)",
                    boxSizing: "border-box",
                    position: "relative",
                }}>{renderPage()}</main>
            </div>
        </div>
    )
}