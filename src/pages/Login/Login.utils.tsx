import type { User } from "../../types/User";



export const handleSubmit =async (
    e: React.FormEvent<HTMLFormElement>, 
    dataForm: { user: string; password: string }, 
    loginContext: (userData: User, empresa: string) => Promise<boolean>,
    empresa: string,
    setError: (mensagem: string | null) => void
) => {
    e.preventDefault()
    
    
    const userData: User = {
        username: dataForm.user,
        password: dataForm.password
    }
    
    const success = await loginContext(userData, empresa);

    if(!success){
        setError("Os dados informados estão incorretos");
    }
}
