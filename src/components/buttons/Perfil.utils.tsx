

export function handleQuit(navigate: any, empresa?: string) {
    if(localStorage.getItem("sp:accessToken")){
        localStorage.removeItem("sp:accessToken")

        navigate(`/${empresa}`)
        
        
    }
}