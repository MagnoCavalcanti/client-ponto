import { login } from "../../lib/apiLogin";
import type { User } from "../../types/User";



export const handleSubmit =async (
    e: React.FormEvent<HTMLFormElement>, 
    dataForm: { user: string; password: string }, 
    navigate: any, 
    empresa: string,
    setError: (mensagem: string | null) => void
) => {
    e.preventDefault()
    
    const userData: User = {
        username: dataForm.user,
        password: dataForm.password
    }
    
    if(await auth(userData)){
        // Aqui você pode adicionar navegação ou outras ações após login
        navigate(`/${empresa}/dashboard`)
    }else{
        setError("Os dados informados estão incorretos")
    }
}

export const auth = async (user: User): Promise<boolean> => {
    const foundUser = await login(user)
    return !!foundUser;
}