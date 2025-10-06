export const Navbar = () => {
    return (
        <>
            <header className="flex bg-slate-50 p-4 text-[#ff6854]">
                <div>
                    <h1 className="text-5xl">Shop It</h1>
                </div>
                <nav className="ml-auto flex gap-4">
                    <span className="material-icons-outlined cursor-pointer" style={{ fontSize: "30px" }}>
                        favorite
                    </span>
                    <span className="material-icons-outlined cursor-pointer" style={{ fontSize: "30px" }}>
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