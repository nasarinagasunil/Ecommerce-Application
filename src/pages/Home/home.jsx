import { Navbar } from "../../components/Navbar/navbar"
import { useEffect, useState } from "react"
import { getAllPrducts } from "../../api/getAllProducts"
import { ProductCard } from "../../components/ProductCard/productCard"
import { useCart } from "../../context/cartContext"
export const Home = () =>{

    const [products, setProducts]=useState();

    const {cart} = useCart();
    console.log(cart);

    useEffect(()=>{
        (async ()=>{
            const data=await getAllPrducts();
            setProducts(data);
            console.log(data);
        })()
    },[])

    return(
        <>
        <Navbar />
        <main className="flex flex-wrap gap-8 justify-center pt-4">
            {
                products?.length>0 && products.map(product=> <ProductCard key={product.id} product={product} />)
            }
        </main>
        </>
    )
}