import React from "react";
import Style from "./ButtonSubmit.module.css"

interface ButtonSubmitProps {
    children: string;
    icon?: React.ElementType;
}

export const ButtonSubmit = ({ children, icon }: ButtonSubmitProps) => {
    

    return (
        <button type="submit" className={Style.buttonSubmit} >
            {icon && <span className={Style.icon}>{React.createElement(icon)}</span>}
            {children}
        </button>
    )
}
