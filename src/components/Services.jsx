import Separador from './Separador'
import Card from './Card'
import { useProductsStore } from '../hooks/useProductsStore'

export default function Services() {
    const { products } = useProductsStore()
    return (
        <>
            <section className="w-full py-12 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Nuestros Servicios</h1>
                        <p className="max-w-3xl text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mx-auto">
                            En nuestro Mr. Harry Spa, te ofrecemos una amplia gama de servicios diseñados para satisfacer tus necesidades de bienestar y relajación. Desde masajes terapéuticos hasta tratamientos faciales rejuvenecedores, nuestro equipo de profesionales altamente capacitados está aquí para brindarte una experiencia transformadora. Explora nuestra lista de servicios y déjanos ser tu socio en el camino hacia el bienestar.
                        </p>
                    </div>
                </div>
            </section>
            <Separador heading="Peluquería" />
            <div className="container flex flex-wrap gap-10 justify-center my-12">
                {
                    products.filter(filtro => filtro.category === 1).map((product, index) => (
                        <Card key={index} {...product} />
                    ))
                }
            </div>
            <Separador heading="Uñas" />
            <div className="container flex flex-wrap gap-10 justify-center my-12">
                {
                    products.filter(filtro => filtro.category === 2).map((product, index) => (
                        <Card key={index} {...product} />
                    ))
                }
            </div>
            <Separador heading="Estética" />
            <div className="container flex flex-wrap gap-10 justify-center my-12">
                {
                    products.filter(filtro => filtro.category === 3).map((product, index) => (
                        <Card key={index} {...product} />
                    ))
                }
            </div>

        </>

    )
}
