import { createContext, useContext, useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
const LoginContext = createContext()

const LoginProvider = ({children}) =>{

    const initialState = {
        email: '',
        password: '',
        name: '',
        avatar: '',
        token:''
    }

    const [{email, password, name, avatar, token}, loginDispatch] = useReducer(loginReducer,initialState);

    return(
        <LoginContext.Provider value={{email, password, name, avatar, token, loginDispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => useContext(LoginContext);

export {LoginProvider, useLogin};