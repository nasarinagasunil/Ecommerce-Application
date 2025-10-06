export const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col w-72 hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative w-full h-60">
                <img
                    className="w-full h-full object-cover"
                    src={product.images[0]}
                    alt={product.title}
                />
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                    {product.title}
                </h2>

                <p className="text-xl font-bold text-[#ff6854] mb-4">
                    ₹{product.price}
                </p>


                {/* Add to Wishlist Button */}
                <button className="mt-auto bg-[#ff6854] hover:bg-[#fc7544] text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300 mb-2">
                    <span className="material-icons-outlined text-2xl">
                        favorite_border
                    </span>
                    Add to WishList
                </button>
                {/* Add to Cart Button */}
                <button className="mt-auto bg-[#ff6854] hover:bg-[#fc7544] text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300">
                    <span className="material-icons-outlined text-2xl">
                        shopping_cart
                    </span>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};
