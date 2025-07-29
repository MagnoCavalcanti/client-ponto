import { menuItems } from "./SideBar.utils"
import Style from "./SideBar.module.css"
import { useLocation, useParams } from "react-router"

export const SideBar = () => {
    const location = useLocation()
    const { empresa } = useParams()

    

    return(
        <>
            <aside className={Style.sidebarBackground}>
                <nav>
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a 
                                    href={`/${empresa}${item.href}`}
                                    className={location.pathname === `/${empresa}${item.href}` ? Style.active : ''}
                                >
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    )
}