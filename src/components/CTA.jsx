import { Link } from "react-router-dom";
import { datos } from "../assets/data"
import { Fade } from "react-awesome-reveal";

export default function CTA({ img }) {
    const { phone, reservas } = datos
    return (
        <section className="relative hero min-h-[92dvh]">
            <div className="overflow-hidden">
                <img src={img} alt="hero" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-95"></div>
            </div>
            <div className="container z-10">
                <div className="w-full py-6 md:py-12">
                    <div className="container grid items-center gap-4 px-4 md:px-6">
                        <Fade cascade >
                            <div className="space-y-2 text-center">
                                <h2 className="text-4xl font-bold tracking-tighter md:text-8xl/tight text-slate-100 md:leading-none">Relájate. Refréscate. Rejuvenece.</h2>
                                <p className="text-white/70 md:text-xl/relaxed">
                                    Te mereces un día de felicidad. Reserva ya tu cita.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Link
                                    className="btn"
                                    to={`https://api.whatsapp.com/send?phone=+57${phone}&text=${reservas}`} target='_blank' rel="noopener noreferrer"
                                >
                                    ¡Reserva Ya!
                                </Link>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}
