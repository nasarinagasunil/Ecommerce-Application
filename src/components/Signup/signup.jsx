import { useNavigate } from "react-router-dom"
import { userSignUp } from "../../api/auth";
import { useLogin } from "../../context/loginContext";

export const Signup = () =>{

    const {name, email, password, loginDispatch} = useLogin()
    const navigate = useNavigate();

    const onFormSubmit = async (e) =>{
        e.preventDefault();
        const data = await userSignUp(name, email, password);
        navigate("/auth/login");
    }


    const onNameChange = (e) =>{
        loginDispatch({
            type: 'NAME',
            payload: {
                value: e.target.value
            }
        })
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

    return (
        <form onSubmit={onFormSubmit} className="flex flex-col gap-4 p-5 w-[400px] bg-white shadow-md">
            <h2 className="text-2xl text-center font-bold text-[#ff6854]">Signup</h2>
            <div className="flex flex-col gap-1">
                <span>Name *</span>
                <input onChange={onNameChange} className="border-b focus:outline-none" required type="text" placeholder="enter your name"  />
            </div>
            <div className="flex flex-col gap-1">
                <span>Email *</span>
                <input onChange={onEmailChange} className="border-b focus:outline-none" required type="email" placeholder="sunil@gmail.com" />
            </div>
            <div className="flex flex-col gap-1">
                <span>Password *</span>
                <input onChange={onPasswordChange} className="border-b focus:outline-none" type="password" required placeholder="sunil@123" />
            </div>
            <div>
                <button className=" w-full mt-auto bg-[#ff6854] hover:bg-[#fc7544] text-white font-medium py-1 px-1  rounded-sm flex items-center justify-center gap-2 transition-colors duration-300 mb-2">
                    Signup
                </button>
            </div>
            <div className="text-center">
                <h1 onClick={()=>navigate("/auth/login")} className="text-2xl text-[#ff6854] font-semibold cursor-pointer" >{'Already have an Account >'}  </h1>
            </div>
        </form>
    )
}