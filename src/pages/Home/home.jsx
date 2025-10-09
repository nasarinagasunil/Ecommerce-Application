import { Navbar } from "../../components/Navbar/navbar"
import { useEffect, useState } from "react"
import { getAllPrducts } from "../../api/getAllProducts"
import { getAllCategories } from "../../api/getAllCategories"
import { ProductCard } from "../../components/ProductCard/productCard"
import { useCart } from "../../context/cartContext"
export const Home = () => {

    const [products, setProducts] = useState();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const { cart } = useCart();


    useEffect(() => {
        (async () => {
            const products = await getAllPrducts();
            const categories = await getAllCategories();
            setProducts(products);
            setCategories(categories);

        })()
    }, [])

    const filteredProducts = selectedCategory === "All" ? products : 
        products.filter(product => product.category.name.toLowerCase() === selectedCategory.toLowerCase());
    

    return (
        <>
            <Navbar />
            <main className="flex flex-col gap-8 justify-center pt-4">
                <div className="flex gap-3 justify-center">
                    <div className={`rounded-2xl px-3 py-1 font-semibold cursor-pointer 
                        ${selectedCategory === "All" ? "bg-[#ff6854] text-white" : "bg-white text-[#ff6854] border border-[#ff6854]"}`}
                        onClick={() => setSelectedCategory("All")}>All</div>
                    {
                        categories?.length > 0 && categories.map(category => <div key={category.id} 
                            onClick={() => setSelectedCategory(category.name)}
                            className={`rounded-2xl px-3 py-1 ${selectedCategory === category.name ? "bg-[#ff6854] text-white" : " bg-white text-[#ff6854] border border-[#ff6854]"}  font-semibold cursor-pointer`}>{category.name}</div>)
                    }
                </div>
                <div className="flex flex-wrap gap-8 justify-center">
                    {
                        filteredProducts?.length > 0 && filteredProducts.map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>

            </main>
        </>
    )
}