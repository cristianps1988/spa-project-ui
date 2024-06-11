import Card from "./Card"
import { Link } from "react-router-dom";
import { useProductsStore } from "../hooks/useProductsStore";
import { useAuthStore } from "../hooks";

export default function FeaturedProducts() {
    const { products } = useProductsStore()
    const { status } = useAuthStore()

    const handleSubmit = () => {
        document.getElementById('product-modal').showModal()
    }

    return (
        <section>
            <div className="container my-12 flex flex-col">
                <div className="flex flex-wrap gap-10 justify-center">
                    {products.filter(favorite => favorite.favorite).map((product, index) => (
                        <Card key={index} {...product} />)
                    )}
                </div>
                <div className="flex flex-col">
                    <Link to="/servicios" className="btn btn-outline mt-14 max-w-40 mx-auto">Ver más servicios</Link>
                    {status === 'authenticated' && <button onClick={handleSubmit} className="btn btn-primary mt-4 max-w-40 mx-auto">Agregar Producto</button>}
                </div>
            </div>
        </section>
    )
}
