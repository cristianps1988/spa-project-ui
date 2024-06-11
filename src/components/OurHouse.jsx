import { Fade } from 'react-awesome-reveal'
import CustomSlider from './CustomSlider'

export default function OurHouse() {
    return (
        <>
            <section className="w-full pb-12 md:pb-24 lg:pb-32">
                <div className="container px-4 md:px-6">
                    <div className="space-y-2">
                        <Fade duration={1500}>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">Nuestras instalaciones</h1>
                            <p className="max-w-3xl text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center mx-auto">
                                Deja atrás el estrés del día a día y sumérgete en un santuario de serenidad
                            </p>
                        </Fade>
                    </div>
                    <CustomSlider />
                </div>
            </section>
        </>

    )
}
