export const Login = () =>{
    const onFormSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <form onSubmit={onFormSubmit} className="flex flex-col gap-2 w-[400] bg-white">
            <div className="flex flex-col gap-1">
                <span>Email *</span>
                <input className="border-b" type="email" placeholder="sunil@gmail.com"/>
            </div>
            <div className="flex flex-col gap-1">
                <span>Password</span>
                <input className="border-b" type="password" placeholder="sunil@123" />
            </div>
            <div>
                <button className="mt-auto bg-[#ff6854] hover:bg-[#fc7544] text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 mb-2">
                    Login
                </button>
            </div>
        </form>
    )
}