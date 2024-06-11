import { Link } from "react-router-dom"
import { datos } from "../assets/data"
import { useAuthStore, useProductFormStore, useProductsStore } from "../hooks"
import { SkeletonCard } from "../components"
import { EditButtons } from "./EditButtons"

export default function Card(data) {
    const { phone, reservaServicio } = datos;
    const { loadingProduct } = useProductsStore()
    const { status } = useAuthStore()
    const { gender, category } = useProductFormStore()


    const getCatGen = (type, id) => {
        if (type == 'gender') {
            const resultGender = gender.filter(gen => gen?.id == id)[0]?.gender
            return resultGender
        }
        if (type == 'category') {
            const resultCategory = category.filter(cat => cat?.id == id)[0]?.category
            return resultCategory
        }
    }

    return (
        <>
            {loadingProduct ? <SkeletonCard /> : (<div className="card w-full mx-4 sm:mx-0 sm:w-96 bg-base-100 shadow-xl " >
                {status === 'authenticated' && <EditButtons id={data.id} />}
                <figure><img className="w-full h-60 object-cover" src={data.photo} alt={data.name} loading="lazy" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">
                            {data.name}
                            {data.promo && <div className="badge badge-secondary badge-outline">Promo</div>}
                        </h2>
                    </div>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{getCatGen("category", data.category)}</div>
                        <div className="badge badge-outline">{getCatGen("gender", data.gender)}</div>
                    </div>
                    <Link className="btn btn-outline mt-4" to={`https://api.whatsapp.com/send?phone=+57${phone}&text=${reservaServicio}${data.name}${" 😁"}`} target='_blank' rel="noopener noreferrer" >Reservar</Link>
                </div>
            </div >)}

        </>
    )
}
