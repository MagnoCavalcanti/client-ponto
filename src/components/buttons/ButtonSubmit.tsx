import Style from "./ButtonSubmit.module.css"

interface ButtonSubmitProps {
    children: string;
}

export const ButtonSubmit = ({ children }: ButtonSubmitProps) => {
    

    return (
        <button type="submit" className={Style.buttonSubmit} >{children}</button>
    )
}
