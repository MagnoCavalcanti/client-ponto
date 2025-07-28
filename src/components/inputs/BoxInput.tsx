import Style from "./BoxInput.module.css"

interface InputProps {
    type: string;
    placeholder: string;
    label: string;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BoxInput = ({ type, placeholder, label, name, value, onChange }: InputProps) => {
    return (
        <div className={Style.boxInput}>
            <label htmlFor={type} className={Style.label}>{label}</label>
            <input 
                type={ type } 
                className={Style.input} 
                placeholder={placeholder} 
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
        
    )
}