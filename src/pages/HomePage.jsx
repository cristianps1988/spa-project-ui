import { lazy } from 'react';
import img from "../assets/hero/hero.jpg";
import cta from "../assets/cta/cta-1.jpg"
const CTA = lazy(() => import('../components/CTA'));
const Hero = lazy(() => import('../components/Hero'));
const FeaturedProducts = lazy(() => import('../components/FeaturedProducts'));
const SectionA = lazy(() => import('../components/SectionA'));
const Separador = lazy(() => import('../components/Separador'));
const Testimonials = lazy(() => import('../components/Testimonials'));

export default function HomePage() {
    return (
        <>
            <Hero
                position={'bottom'}
                img={img}
            />
            <SectionA />
            <Separador text='Servicios que más aman nuestros clientes' heading='Servicios Destacados' />
            <FeaturedProducts />
            <Separador text='¿Qué dicen nuestros clientes?' heading='Mr. Harry Spa' />
            <Testimonials />
            <CTA
                img={cta}
            />
        </>
    )
}
