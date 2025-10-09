import { useNavigate } from "react-router-dom"
import { useState } from "react";
export const Navbar = () => {
    const navigate = useNavigate();
    const onShopItClick = () =>{
        navigate("/");
    }
    const onShopingCartClick = () =>{
        navigate("/cart")
    }

    const [isAccountDropDownOpen, setIsAccoutDropDownOpen] = useState(false);

    const onAccoutClick  = () => {
        setIsAccoutDropDownOpen(!isAccountDropDownOpen);
    }

    const onLoginClick = () =>{
        navigate("/auth/login");
    }

    return (
        <>
            <header className="flex bg-slate-50 p-4 text-[#ff6854]">
                <div className="cursor-pointer" onClick={onShopItClick}>
                    <h1 className="text-5xl">Shop It</h1>
                </div>
                <nav className="ml-auto flex gap-4">
                    <span onClick={()=>navigate("/wishlist")} className="material-icons-outlined cursor-pointer" style={{ fontSize: "30px" }}>
                        favorite
                    </span>
                    <span onClick={onShopingCartClick} className="material-icons-outlined cursor-pointer" style={{ fontSize: "30px" }}>
                        shopping_cart
                    </span>
                    <div className="relative">
                        <span onClick={onAccoutClick} className="material-icons-outlined cursor-pointer" style={{ fontSize: "30px" }}>
                            account_circle
                        </span>
                        <div>
                            {
                                isAccountDropDownOpen && <button onClick={onLoginClick} className="bg-[#ff6854] px-2 py-1 text-white cursor-pointer">Login</button>
                            }
                        </div>
                    </div>
                    
                </nav>
            </header>
        </>
    )
}