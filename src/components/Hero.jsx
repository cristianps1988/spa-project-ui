import { Fade } from "react-awesome-reveal";


export default function Hero({ img, position }) {
    return (
        <section className="hero min-h-[92dvh] mt-[60px]">
            <div className="overflow-hidden">
                <img src={img} alt="hero" className={`absolute inset-0 h-full w-full object-cover object-${position}`} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
            </div>
            <div className="container z-10">
                <div className="hero-overlay"></div>
                <div className="hero-content text-left text-neutral-content justify-start">
                    <div className="max-w-md md:max-w-xl">
                        <Fade cascade>
                            <h1 className="mb-5 text-5xl md:text-7xl font-bold relleno text-transparent font-serif">Mr. Harry Spa</h1>
                            <p className="mb-5 text-3xl">Bienvenido al refugio perfecto en Valledupar para renovar tu bienestar.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}
