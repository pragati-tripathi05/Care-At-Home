import { Navigate, useNavigate } from "react-router-dom"
import { accessData } from "../utils/localStorage"

export const PrivatRoute =({children}) => {
    const navigate = useNavigate()
    const isAuth = accessData("isAuth")
    if(!isAuth){
       return <Navigate to="/" />
    }
    return children
}