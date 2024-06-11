import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../assets/logo-black.png"
import { faSquareInstagram, faSquareFacebook, faSquareYoutube } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal"


export default function Footer() {
    const year = new Date()
    return (
        <>
            <Fade duration={1500} delay={100}>
                <footer className="footer footer-center p-10 text-primary-content">
                    <aside>
                        <img className="h-32" src={logo} alt="logo" />
                        <p className="font-bold">
                            Mr. Harry Spa
                        </p>
                        <p className="">🍃 Estamos comprometidos con el cuidado del medio ambiente 🌎</p>
                    </aside>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <Link to="https://www.instagram.com/mrharry_spa/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className="h-8 hover:scale-125 ease-in-out duration-200" icon={faSquareInstagram} />
                            </Link>
                            <Link to="https://web.facebook.com/mrharryspa/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className="h-8 hover:scale-125 ease-in-out duration-200" icon={faSquareFacebook} />
                            </Link>
                            <Link to="https://www.youtube.com/@misterharry213/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon className="h-8 hover:scale-125 ease-in-out duration-200" icon={faSquareYoutube} />
                            </Link>
                        </div>
                    </nav>
                </footer>
                <p className='flex align-middle justify-center text-slate-600 pb-4 mx-auto '>Hecho con ❤️ por &nbsp; <Link target='_blank' rel="noopener noreferrer" to="https://qzlstudio.com" className='font-black hover:text-slate-400 hover:scale-105 ease-in-out duration-300'>QZL Studio</Link></p>
                <p className='flex align-middle justify-center text-slate-600 pb-8 mx-auto '>Copyright © {year.getFullYear()} - Todos los derechos reservados</p>
            </Fade>
        </>
    )
}
