import { lazy } from "react"
import img from "../assets/hero/contact.jpg"
import cta from "../assets/cta/cta-4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faClock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import { datos } from "../assets/data"
import { Slide } from "react-awesome-reveal"
const CTA = lazy(() => import('../components/CTA'));
const Hero = lazy(() => import('../components/Hero'));
const Separador = lazy(() => import('../components/Separador'));

export default function Contact() {
    const { phone } = datos;
    return (
        <>
            <Hero
                position='center'
                img={img}
            />
            <Separador heading="Nuestra Ubicación" text="Aquí ocurre la magia" />
            <div className="w-full">
                <div className="container grid items-center gap-6 px-4 py-12 md:py-16 lg:py-20 lg:grid-cols-2 xl:gap-12 xl:py-24">
                    <Slide>
                        <div className='overflow-hidden pb-[56.25%] relative h-0'>
                            <iframe className='absolute left-0 top-0 h-full w-full rounded-lg border-slate-300 border-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.313508105328!2d-73.25228082504682!3d10.475933089655177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab9b68619a44d%3A0x347f7a1afe2f8bfc!2sMr%20Harry%20Spa!5e0!3m2!1ses-419!2sco!4v1713882725647!5m2!1ses-419!2sco" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Slide>
                    <Slide direction="right">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2 flex flex-col">
                                <h3 className="text-2xl font-bold">Información de contacto</h3>
                                <div className="grid gap-1.5">
                                    <p className="flex items-center space-x-2">
                                        <FontAwesomeIcon className='mr-2' icon={faLocationDot} />
                                        Cra. 11 # 14–08 barrio Loperena, Valledupar - Cesar
                                    </p>
                                    <p className="flex items-center space-x-2">
                                        <FontAwesomeIcon className='mr-2' icon={faPhone} />
                                        {phone} – 5722995
                                    </p>
                                    <p className="flex items-center space-x-2">
                                        <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                                        info@mrharryspa.com
                                    </p>
                                    <p className="flex items-center space-x-2">
                                        <FontAwesomeIcon className="mr-2" icon={faSquareInstagram} />
                                        @mrharry_spa
                                    </p>
                                    <p className="flex items-center space-x-2">
                                        <FontAwesomeIcon className='mr-2' icon={faClock} />
                                        Lunes a Sábados 7:00 a.m-7:00 p.m <br />
                                        Domingos y Festivos: 8:00 a.m–4:00 p.m

                                    </p>
                                </div>
                                <button className="btn btn-primary w-1/2">Contactar</button>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <CTA
                img={cta}
            />
        </>
    )
}
