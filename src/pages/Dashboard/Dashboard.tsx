import { Clock, LogIn } from "lucide-react"
import { Card } from "../../components/cards/Card"
import Style from "./Dashboard.module.css"
import { employees } from "../../data/register.mock"

export const Dashboard = () => {

    const verifyStatus = (statusItem: string) => {
        return statusItem == "Presente"? "var(--accent)" : "var(--destructive)"
    }

    const styleCard = {
        margin: "50px 50px"
    }
    
    return (
        <>
            <div className={Style.headerDashboard}>
                <h1 className={Style.title}>Dashboard</h1>
                <p className={Style.subtitle}>Visão geral do sistema</p>
            </div>
            <div className={Style.content}>
                <Card className={styleCard}>
                    <h3 className={Style.cardTitle}>
                            <Clock className={Style.icons}/> Status dos funcionários
                    </h3>
                    <div className={Style.employeesList}>
                        {employees.map((item)=> (
                            <div className={Style.employees}>
                                <span>
                                    <p className={Style.name}>
                                        {item.name}
                                    </p>
                                    <p className={Style.profession}>{item.profession}</p>
                                </span>
                                <div>
                                    <span className={Style.entry}>{item.entry}</span>
                                    <span className={Style.status} style={{backgroundColor: verifyStatus(item.status)}}>{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card> 
                <Card className={styleCard}>
                <h3 className={Style.cardTitle}>
                            <Clock className={Style.icons}/> Atividade Recentes
                </h3>
                <div className={Style.employeesList}>
                    {employees.map((item) => (
                        <div className={Style.employees}>
                        <span>
                            <p className={Style.name}>
                                <LogIn color="var(--accent)"/>{item.name}
                            </p>
                            <p className={Style.profession}>{item.profession}</p>
                        </span>
                        <div>
                            <span className={Style.entry} style={{color: verifyStatus(item.status)}}>{item.entry}</span>
                            
                        </div>
                    </div>
                    ))}
                </div>
                </Card>
            </div>
        </>
    )
}