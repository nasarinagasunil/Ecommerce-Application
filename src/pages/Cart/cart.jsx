
import { HorizontalProductCard } from "../../components/HorizontalProductCard/horizontalProductCard";
import { Navbar } from "../../components/Navbar/navbar"
import { useCart } from "../../context/cartContext"
import { PriceDetails } from "../../components/PriceDetails/priceDetails";
export const Cart = () => {
    const { cart } = useCart();
    return (
        <>
            <Navbar />
            <main className="mt-4 flex flex-col gap-4 justify-center">
                <p className="text-5xl text-center font-bold">My Cart</p>
                <div className="flex gap-10 justify-center">
                    <div className="mt-4 flex flex-col gap-4">
                        {
                            cart?.length > 0 && cart.map(product => <HorizontalProductCard key={product.id} product={product} />)
                        }
                    </div>
                    {
                        cart?.length > 0 ? <PriceDetails /> : <p>No Products in the Cart, Add Products</p>
                    }
                    
                </div>
                
            </main>

        </>
    )
}