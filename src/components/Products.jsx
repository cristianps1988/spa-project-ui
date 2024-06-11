import Card from "./Card"
import { data } from "../assets/data"
import { Link } from "react-router-dom";

export default function Products() {
    const { products } = data;
    return (
        <section>
            <div className="container my-12 flex flex-col">
                <div className="flex flex-wrap gap-10 justify-center">
                    {
                        products.filter(favorite => favorite.favorite).map((product, index) => (
                            <Card key={index} {...product} />
                        ))
                    }
                </div>
                <Link to="/servicios" className="btn btn-outline mt-14 max-w-40 mx-auto">Ver más servicios</Link>
                { }
            </div>
        </section>
    )
}
