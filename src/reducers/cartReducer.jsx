export const cartReducer = (state, {type, payload}) =>{
    switch (type){
        case "ADD_TO_CART":
            return{
                ...state,
                wishList: state.wishList.filter(product=>product.id !== payload.product.id), 
                cart: [...state.cart, payload.product]
            }
        case "REMOVE_FROM_CART":
            return{
                ...state,
                cart: state.cart.filter(product=> product.id !== payload.id),
            }
        case "ADD_TO_WISHLIST":
            return{
                ...state,
                cart: state.cart.filter(product=>product.id !== payload.product.id),
                wishList: [...state.wishList,payload.product],
            }
        case "REMOVE_FROM_WISHLIST":
            return{
                ...state,
                wishList: state.wishList.filter(product=>product.id !== payload.id),
            }
        default:
            return state;
            

    }
}