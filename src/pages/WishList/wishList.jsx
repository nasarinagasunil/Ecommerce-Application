import { Navbar } from "../../components/Navbar/navbar"
import { useCart } from "../../context/cartContext"
import { HorizontalProductCard } from "../../components/HorizontalProductCard/horizontalProductCard";
export const WishList = () => {
    const { wishList } = useCart();
    return (
        <>
            <Navbar />
            <main className="flex flex-col">
                <p className="text-4xl mt-6">My Favourites...</p>
                <div className="flex flex-wrap gap-3 justify-center mt-6">
                    {
                        wishList?.length > 0 ? wishList.map(product => <HorizontalProductCard key={product.id} product={product} />) :
                            <p>WishList empty, click here to products into wishlist...</p>
                    }
                </div>

            </main>
        </>

    )
}