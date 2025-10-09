import { useLogin } from "../../context/loginContext";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";
export const Login = () =>{

    const {email, password, token, loginDispatch} = useLogin()

    const navigate = useNavigate();

    const onFormSubmit = async (e) =>{
        e.preventDefault();
        const data =await  userLogin(email, password);
        console.log(data);

        loginDispatch({
            type: "TOKEN",
            payload: {
                token: data
            }
        })
        if(data.access_token){
            navigate("/")
        }

    }


    const onEmailChange = (e) =>{
        loginDispatch({
            type: 'EMAIL',
            payload: {
                value: e.target.value
            }
        })
    }

    const onPasswordChange = (e) =>{
        loginDispatch({
            type: "PASSWORD",
            payload: {
                value: e.target.value
            }
        })
    }

    return(
        <form onSubmit={onFormSubmit} className="flex flex-col gap-4 p-5 w-[400px] bg-white shadow-md">
            <h2 className="text-2xl text-center font-bold text-[#ff6854]">Login</h2>
            <div className="flex flex-col gap-1">
                <span>Email *</span>
                <input onChange={onEmailChange} className="border-b focus:outline-none" required type="email" placeholder="sunil@gmail.com"/>
            </div>
            <div className="flex flex-col gap-1">
                <span>Password *</span>
                <input onChange={onPasswordChange} className="border-b focus:outline-none" type="password" required placeholder="sunil@123" />
            </div>
            <div>
                <button className=" w-full mt-auto bg-[#ff6854] hover:bg-[#fc7544] text-white font-medium py-1 px-1  rounded-sm flex items-center justify-center gap-2 transition-colors duration-300 mb-2">
                    Login
                </button>
            </div>
        </form>
    )
}