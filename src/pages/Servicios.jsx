// import { CTA, Hero, Services } from '../components'
import { lazy } from "react"
import cta from "../assets/cta/cta-3.jpg"
import img from "../assets/hero/servicios.jpg"
const Hero = lazy(() => import('../components/Hero'))
const Services = lazy(() => import('../components/Services'))
const CTA = lazy(() => import('../components/CTA'))

export default function Servicios() {
    return (
        <>
            <Hero
                position="bottom"
                img={img}
            />
            <Services />
            <CTA
                img={cta}
            />
        </>
    )
}
