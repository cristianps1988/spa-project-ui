import { Fade } from "react-awesome-reveal";

export default function Separador({ text, heading }) {
    return (
        <section className="h-60 w-full bg-slate-900">
            <div className="container flex flex-col justify-center items-center h-full p-4 md:p-0">
                <Fade duration={1500}>
                    {text ? <p className="text-base-100 text-center md:text-2xl mb-4">{text}</p> : <span className="hidden"></span>}
                    <h2 className="dorado animate-animateText text-4xl md:text-6xl font-semibold">{heading}</h2>
                </Fade>
            </div>
        </section>
    )
}
