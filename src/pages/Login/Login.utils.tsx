import { users } from "../../data/user.mock"

export interface User {
    usuario: string;
    senha: string;
} 

export const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>, 
    dataForm: { user: string; password: string }, 
    navigate: any, 
    empresa: string,
    setError: (mensagem: string | null) => void
) => {
    e.preventDefault()
    
    const userData: User = {
        usuario: dataForm.user,
        senha: dataForm.password
    }
    
    if(auth(userData)){
        // Aqui você pode adicionar navegação ou outras ações após login
        navigate(`/${empresa}/dashboard`)
    }else{
        setError("Os dados informados estão incorretos")
    }
}

export const auth = (user: User): boolean => {
    const foundUser = users.find(userMock => 
        userMock.usuario === user.usuario && userMock.senha === user.senha
    );
    return !!foundUser;
}