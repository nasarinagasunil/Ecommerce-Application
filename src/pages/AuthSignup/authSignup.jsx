import { Navbar } from "../../components/Navbar/navbar"
import { Signup } from "../../components/Signup/signup"

export const AuthSignup = () =>{
    return(
        <>
        <Navbar />
        <main className="mt-4 flex justify-center">
            <Signup />
        </main>
        </>
    )
}