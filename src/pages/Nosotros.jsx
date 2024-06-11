// import { Hero, CTA, OurTeam, OurHouse } from '../components'
import { lazy } from "react"
import img from "../assets/hero/nosotros.jpg"
import cta from "../assets/cta/cta-2.jpg"
const Hero = lazy(() => import('../components/Hero'))
const CTA = lazy(() => import('../components/CTA'))
const OurTeam = lazy(() => import('../components/OurTeam'))
const OurHouse = lazy(() => import('../components/OurHouse'))

export default function Nosotros() {
    return (
        <>
            <Hero
                position="center"
                img={img}
            />
            <OurTeam />
            <OurHouse />
            <CTA
                img={cta}
            />
        </>
    )
}
