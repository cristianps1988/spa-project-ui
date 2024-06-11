import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { datos } from "../assets/data"

export const WspButton = () => {
    const { phone, text } = datos;
    return (
        <div className="fixed z-[100] h-[55px] w-[55px] rounded-full leading-[55px] bottom-[30px] right-[30px] bg-[#25D366] text-center text-[30px] shadow-lg text-white hover:bg-white hover:text-[#25D366] hover:scale-125 ease-in-out duration-200">
            <Link to={`https://api.whatsapp.com/send?phone=+57${phone}&text=${text}`} target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
        </div>
    )
}

