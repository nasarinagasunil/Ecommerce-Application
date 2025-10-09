import { createContext, useContext, useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
const LoginContext = createContext()

const LoginProvider = ({children}) =>{

    const initialState = {
        email: '',
        password: ''
    }
    
    const [{email, password}, loginDispatch] = useReducer(loginReducer,initialState);

    return(
        <LoginContext.Provider value={{email, password, loginDispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => useContext(LoginContext);

export {LoginProvider, useLogin};