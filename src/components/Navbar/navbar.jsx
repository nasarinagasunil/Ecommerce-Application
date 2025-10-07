import { useNavigate } from "react-router-dom"
export const Navbar = () => {
    const navigate = useNavigate();
    const onShopItClick = () =>{
        navigate("/");
    }
    const onShopingCartClick = () =>{
        navigate("/cart")
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
                    <span className="material-icons-outlined cursor-pointer" style={{ fontSize: "30px" }}>
                        account_circle
                    </span>
                </nav>
            </header>
        </>
    )
}