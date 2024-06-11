import { Link, NavLink } from "react-router-dom";
import { datos } from "../assets/data"

export default function NavBar() {
    const { phone, text } = datos;
    return (
        <nav className="bg-base-100 fixed top-0 z-50 left-0 right-0 w-full shadow-md">
            <div className="navbar container px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/nosotros">
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicios">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-black text-slate-800">Mr. Harry Spa</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "btn-activado" : null}
                                to="/">
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "btn-activado" : null}
                                to="/nosotros">
                                Nosotros
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "btn-activado" : null}
                                to="/servicios">
                                Servicios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? "btn-activado" : null}
                                to="/contacto">
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={`https://api.whatsapp.com/send?phone=+57${phone}&text=${text}`} target='_blank' rel="noopener noreferrer" className="btn btn-outline" >Contacto</Link>
                </div>
            </div>
        </nav>
    )
}
