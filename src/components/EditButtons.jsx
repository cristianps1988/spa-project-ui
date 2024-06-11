import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useProductsStore } from "../hooks"
import Swal from "sweetalert2"

export const EditButtons = ({ id }) => {
    const { setActiveProduct, startDeletingProduct } = useProductsStore()
    const initialState = {
        id: null,
        name: "",
        category: 0,
        gender: 0,
        promo: false,
        favorite: false,
        photo: "",
    }
    const onEditProuct = (e) => {
        e.preventDefault()
        setActiveProduct(id)
        document.getElementById('product-modal').showModal()
    }

    const onDeleteProuct = (e) => {
        e.preventDefault()
        setActiveProduct(id)
        Swal.fire({
            title: "¿Quieres eliminar este producto?",
            showDenyButton: true,
            confirmButtonText: "Eliminar",
            denyButtonText: `Cancelar`
        }).then((result) => {
            if (result.isConfirmed) {
                startDeletingProduct(id);
                document.getElementById('product-modal').close()
                Swal.fire("Eliminado exitosamente!", "", "success");
            } else {
                setActiveProduct(initialState)
                document.getElementById('product-modal').close()
                Swal.fire("Se canceló la eliminación", "", "info");
            }
        });
    }

    return (
        <>
            <form  >
                <div onClick={onEditProuct} className="absolute flex justify-center align-middle top-2 right-12 h-8 w-8 rounded-full bg-cyan-700 text-white text-center shadow-sm shadow-slate-400 hover:bg-slate-300 hover:text-slate-700 hover:cursor-pointer hover:scale-125 ease-in-out duration-200">
                    <button className=""><FontAwesomeIcon icon={faPen} /> </button>
                </div>
                <div onClick={onDeleteProuct} className="absolute flex justify-center align-middle top-2 right-2 h-8 w-8 rounded-full bg-cyan-700 text-white text-center shadow-sm shadow-slate-400 hover:bg-slate-300 hover:text-slate-700 hover:cursor-pointer hover:scale-125 ease-in-out duration-200">
                    <button className=""><FontAwesomeIcon icon={faTrash} /> </button>
                </div>
            </form>
        </>
    )
}