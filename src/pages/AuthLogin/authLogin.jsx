import { Login } from "../../components/Login/login"
import { Navbar } from "../../components/Navbar/navbar"

export const AuthLogin = () =>{
    return(
        <>
        <Navbar />
        <main>
            <Login />
        </main>
        </>
    )
}