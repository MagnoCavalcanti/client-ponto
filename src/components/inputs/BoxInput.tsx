import Style from "./BoxInput.module.css"

interface InputProps {
    type: string;
    placeholder: string;
    label: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BoxInput = ({ type, placeholder, label, name, onChange }: InputProps) => {
    return (
        <div className={Style.boxInput}>
            <label htmlFor={type} className={Style.label}>{label}</label>
            <input 
                type={ type } 
                className={Style.input} 
                placeholder={placeholder} 
                name={name}
                onChange={onChange}
            />
        </div>
        
    )
}