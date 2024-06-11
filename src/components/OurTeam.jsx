import { Fade, Slide } from "react-awesome-reveal"
import { team } from "../assets/team"
import { getImageUrl } from "../helpers/getImageUrl"

export default function OurTeam() {
    return (
        <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="space-y-6">
                    <div className="pb-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-2">Mr. Harry Spa</h1>
                        <p className="max-w-3xl mx-auto text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  text-center">
                            En Mr. Harry Spa ofrecemos diversos servicios de Relajación y Estética, como masajes, faciales, terapias, reductores, depilación y mucho más. Aquí encontrará un espacio acondicionado para satisfacer sus necesidades; contamos con un equipo de profesionales con una amplia experiencia para atender a nuestros clientes y brindarles un servicio de excelente calidad; además utilizamos productos naturales para mejorar los beneficios de nuestros tratamientos y procedimientos.
                            <br />
                            Somos un Spa y Centro de Belleza ubicado en la ciudad de Valledupar; nuestras instalaciones están acondicionadas para la relajación, el descanso y el bienestar.
                        </p>
                    </div>
                    <div className="pb-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-2">Quienes Somos</h2>
                        <p className="max-w-3xl mx-auto text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  text-center">
                            Contamos con años de experiencia en el mercado y nuestro principal objetivo es satisfacer los deseos de nuestros clientes, para lo cual ofrecemos nuestros servicios con mucho profesionalismo, trabajamos para que nuestros clientes logren a cabalidad las expectativas del servicio que estaban buscando tanto para ellos mismos como para sus seres queridos.
                        </p>
                    </div>
                    <div className="pb-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-2">Conoce Nuestro Equipo</h2>
                        <p className="max-w-3xl mx-auto text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed  text-center">
                            Contamos con personal profesional altamente capacitado en terapias de relajación y tratamientos de estética y belleza para poderles ofrecer a nuestros clientes un servicio de calidad.
                            También contamos con excelentes productos y equipos profesionales de acuerdo a la normatividad, lo cual complementa la calidad del servicio y los resultados del mismo. Nuestro principal objetivo es satisfacer todos lo deseos de nuestros clientes y brindarles un servicio que supere sus expectativas.

                        </p>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="grid max-w-3xl grid-cols-1 items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-y-12 mx-auto">
                        {
                            team.map((person, index) => (
                                <div key={index} className="p-2 self-start">
                                    <Fade >
                                        <img
                                            alt="Team member"
                                            className="mx-auto rounded-full overflow-hidden object-cover object-center w-[150px] h-[150px] shadow-md mb-4"
                                            height="500"
                                            src={getImageUrl(person.img, "ourTeam")}
                                            style={{
                                                aspectRatio: "400/500",
                                                objectFit: "cover",
                                            }}
                                            width="400"
                                        />
                                        <div className="space-y-1 text-center">
                                            <h3 className="text-lg font-bold">{person.name}</h3>
                                            <p className="text-sm text-gray-700 font-semibold">{person.role}</p>
                                            <p className="text-sm text-gray-600">{person?.bio}</p>
                                            <p className="text-sm text-gray-400 italic">{person?.phrase}</p>
                                        </div>
                                    </Fade>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
