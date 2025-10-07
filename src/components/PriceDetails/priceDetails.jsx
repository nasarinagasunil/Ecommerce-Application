import { useCart } from "../../context/cartContext"
import { findTotalCartPrice } from "../../utils/findTotalCartPrice";
export const PriceDetails = () =>{
    const {cart} = useCart();
    const totalCartPrice = findTotalCartPrice(cart);
    const deliveryCharges = 49;
    return (
        <div className="flex flex-col gap-3 p-4 h-fit rounded-xl mt-4  w-[400px] shadow-lg">
            <p className="text-xl pb-2 font-bold border-b">Price Details</p>
            <div className="flex mb-2">
                <p>Price ({cart.length}) items</p>
                <p className="ml-auto">Rs. {totalCartPrice}</p>
            </div>
            <div className="flex pb-2 border-b">
                <p>Delivery Charges</p>
                <p className="ml-auto">Rs. {deliveryCharges}</p>
            </div>
            <div className="flex pb-2 border-b">
                <p>Total Amount</p>
                <p className="ml-auto">Rs. {totalCartPrice + deliveryCharges}</p>
            </div>
            <button className="mt-auto bg-[#ff6854] hover:bg-[#fc7544] text-white font-medium py-2 rounded-md flex items-center justify-center gap-2 transition-colors duration-300 mb-2">
                Place Order
            </button>
        </div>
    )
}