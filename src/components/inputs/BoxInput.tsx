import Style from "./BoxInput.module.css"

interface InputProps {
    type: string;
    placeholder: string;
    label: string;
}

export const BoxInput = ({ type, placeholder, label }: InputProps) => {
    return (
        <div className={Style.boxInput}>
            <label htmlFor={type} className={Style.label}>{label}</label>
            <input type={ type } className={Style.input} placeholder={placeholder} />
        </div>
        
    )
}