import { Login } from "../../components/Login/login"
import { Navbar } from "../../components/Navbar/navbar"

export const AuthLogin = () =>{
    return(
        <>
        <Navbar />
        <main className="mt-4 flex justify-center">
            <Login />
        </main>
        </>
    )
}