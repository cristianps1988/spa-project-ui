import { useEffect, useState } from "react"
import { useProductFormStore } from "../hooks/useProductFormStore"
import { useProductsStore } from "../hooks"
import Swal from "sweetalert2"
import { uploadFile } from "../helpers/uploadFile"

export default function ProductModal() {
    const initialState = {
        id: null,
        name: "",
        category: 0,
        gender: 0,
        promo: false,
        favorite: false,
        photo: "",
    }

    const { category, gender } = useProductFormStore()
    const { activeProduct, setActiveProduct, startSavingProduct } = useProductsStore()
    const [formValues, setFormValues] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (activeProduct?.id !== null) {
            setFormValues({ ...activeProduct })
        }
        if (activeProduct.id == null) {
            setFormValues({ ...initialState })
        }
    }, [activeProduct])

    const formVerify = (data) => {
        for (const key in data) {
            switch (key) {
                case "name":
                    if (data[key] === '') {
                        return false
                    }
                    break;
                case "category":
                    if (data[key] === 0) {
                        return false
                    }
                    break;
                case "gender":
                    if (data[key] === 0) {
                        return false
                    }
                    break;
                case "photo":
                    if (data[key] === '')
                        return false
            }
        }
        return true
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (formVerify(formValues) == false) {
            document.getElementById('product-modal').close()
            setFormValues(initialState)
            setIsLoading(false)
            return Swal.fire('Todos los campos son obligatorios', 'Verifica todos los campos', 'error')
        }
        try {
            const imgUploaded = await uploadFile(formValues.photo[0])
            const formValuesWithPhotoUploaded = { ...formValues, photo: imgUploaded }
            startSavingProduct(formValuesWithPhotoUploaded)
            document.getElementById('product-modal').close()
            setActiveProduct(initialState)
            setFormValues(initialState)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            document.getElementById('product-modal').close()
            Swal.fire('Ups... algo salió mal', 'Vuelve a intentar nuevamente', 'error')
            setIsLoading(false)
            setFormValues(initialState)
        }
    }

    const handleClose = () => {
        document.getElementById('product-modal').close()
        setActiveProduct(initialState)
        setFormValues(initialState)
    }

    const onInputChange = ({ target }) => {
        if (target.type === 'text') {
            setFormValues({
                ...formValues,
                [target.name]: target.value
            })
        }
        if (target.type === 'checkbox') {
            setFormValues({
                ...formValues,
                [target.name]: target.checked
            })
        }
        if (target.type === 'select-one') {
            setFormValues({
                ...formValues,
                [target.name]: +target.value
            })
        }
        if (target.type === 'file') {
            setFormValues({
                ...formValues,
                [target.name]: target.files
            })
        }
    }

    return (
        <>
            <dialog id="product-modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <button onClick={handleClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">Producto</h3>
                    <div className="">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    name="name"
                                    value={formValues?.name}
                                    type="text"
                                    className="grow"
                                    placeholder="Nombre del producto"
                                    onChange={onInputChange}
                                />
                            </label>
                            <div className="grid grid-cols-2 gap-8">
                                <select name="category" value={formValues?.category} className="select select-bordered w-full max-w-xs" onChange={onInputChange} required>
                                    <option key={0} value={0} disabled >Categoría</option>
                                    {
                                        category.map(element => (
                                            <option key={element.id} value={element.id}>{element.category} </option>
                                        ))
                                    }
                                </select>
                                <div className="form-control">
                                    <label className="label cursor-pointer flex justify-between">
                                        <span className="label-text">Favorito</span>
                                        <input
                                            type="checkbox"
                                            className="toggle"
                                            name="favorite"
                                            checked={formValues?.favorite}
                                            onChange={onInputChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <select name="gender" value={formValues?.gender} className="select select-bordered w-full max-w-xs" onChange={onInputChange}>
                                    <option value={0} disabled >Género</option>
                                    {
                                        gender.map(element => (
                                            <option key={element.id} value={element.id}>{element.gender} </option>
                                        ))
                                    }
                                </select>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Promoción</span>
                                        <input
                                            type="checkbox"
                                            className="toggle"
                                            name="promo"
                                            checked={formValues?.promo}
                                            onChange={onInputChange}
                                        />
                                    </label>
                                </div>

                            </div>

                            <div className="flex justify-between w-ful">
                                <p className="my-auto">Agregar foto</p>
                                <input name="photo" type="file" className="file-input file-input-bordered w-full max-w-xs"
                                    onChange={onInputChange} accept="image/*" />
                            </div>
                            <button className={`btn btn-success w-32 self-end ${isLoading && 'btn-disabled'}`}>Guardar{isLoading && <span className="loading loading-spinner"></span>}</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}