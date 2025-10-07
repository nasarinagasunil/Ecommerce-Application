import { useCart } from "../../context/cartContext";
import { findProductInCart } from "../../utils/findProductInCart";
import { findProductInWishList } from "../../utils/findProductInWishList";
export const HorizontalProductCard = ({ product }) => {

    const { cart, wishList, cartDispatch } = useCart();

    const onRemoveFromCartClick = (id) => {
        cartDispatch({
            type: "REMOVE_FROM_CART",
            payload: { id }
        })
    }
    const onAddToCartClick = () =>{
        cartDispatch({
            type: "ADD_TO_CART",
            payload: {product}
        })
    }

    const onRemoveFromWishListClick = (id) =>{
        cartDispatch({
            type:"REMOVE_FROM_WISHLIST",
            payload: {id}
        })
    }

    const onAddToWishListClick = (product) =>{
        cartDispatch({
            type:"ADD_TO_WISHLIST",
            payload: {product}
        })
    }

    const isProductInCart = findProductInCart(cart, product.id);
    const isProductInWishList = findProductInWishList(wishList, product.id);


    return (
        <div className="flex shadow-lg rounded-2xl overflow-hidden bg-white max-w-xl hover:shadow-xl transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative w-2/5">
                <img
                    src={product.images?.[0] || "/assets/shoes.jpg"}
                    alt={product.title || "Product"}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col justify-between w-3/5">
                {/* Title and Price */}
                <div>
                    <h3 className="font-semibold text-[#ff6854] font-bold text-lg mb-1 truncate">
                        {product.title}
                    </h3>
                    <p className="mt-1 text-gray-800 font-bold text-xl">
                        ₹{product.price}
                    </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-3">
                    <p className="text-sm font-medium text-gray-700">Quantity:</p>
                    <div className="flex items-center gap-2">
                        <button className="px-2 py-1 bg-gray-100 border rounded hover:bg-gray-200 transition-colors duration-200">
                            -
                        </button>
                        <span className="font-medium text-gray-800">1</span>
                        <button className="px-2 py-1 bg-gray-100 border rounded hover:bg-gray-200 transition-colors duration-200">
                            +
                        </button>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4">
                    {/* Remove from Cart */}
                    {
                        isProductInCart ?
                            <button onClick={() => onRemoveFromCartClick(product.id)} className="flex items-center gap-2 bg-[#ff6854] hover:bg-[#fc7544] text-white font-medium px-3 py-2 rounded-lg transition-colors duration-300">
                                <span className="material-icons-outlined text-2xl">
                                    remove_shopping_cart
                                </span>
                                Remove From Cart
                            </button> :
                            <button onClick={() => onAddToCartClick(product)} className="flex items-center gap-2 bg-[#ff6854] hover:bg-[#fc7544] text-white font-medium px-3 py-2 rounded-lg transition-colors duration-300">
                                <span className="material-icons-outlined text-2xl">
                                    shopping_cart
                                </span>
                                Add To Cart
                            </button>

                    }


                    {/* Move to Wishlist */}
                    {
                        isProductInWishList ?
                            <button onClick={()=>onRemoveFromWishListClick(product.id)} className="flex items-center gap-2 border border-[#ff6854] text-[#ff6854] hover:bg-[#fff1ee] px-3 py-2 rounded-lg transition-colors duration-300">
                                <span className="material-icons-outlined text-2xl">
                                    favorite
                                </span>
                                Remove from Wishlist
                            </button> :
                            <button onClick={()=>onAddToWishListClick(product)} className="flex items-center gap-2 border border-[#ff6854] text-[#ff6854] hover:bg-[#fff1ee] px-3 py-2 rounded-lg transition-colors duration-300">
                                <span className="material-icons-outlined text-2xl">
                                    favorite_border
                                </span>
                                Move To WishList
                            </button>
                    }

                </div>
            </div>
        </div>
    );
};
