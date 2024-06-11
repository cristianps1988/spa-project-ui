import { useDispatch, useSelector } from "react-redux"
import { onLoadProducts, onSetActiveProduct, onUpdateProduct, onAddNewProduct, onDeleteProduct, onLoading } from "../store"
import mrHarryAPI from "../api/mrHarryAPI"
import Swal from "sweetalert2"


export const useProductsStore = () => {

    const dispatch = useDispatch()
    const { products, activeProduct, loadingProduct } = useSelector(state => state.products)

    const startLoadingProduct = async () => {
        try {
            const { data } = await mrHarryAPI.get('/products')
            dispatch(onLoadProducts(data))
        } catch (error) {
            console.log(error)
        }
    }

    const setActiveProduct = (productId) => {
        dispatch(onSetActiveProduct(productId))
    }

    const startSavingProduct = async (product) => {
        try {
            if (product.id) {
                //actualizar
                await mrHarryAPI.patch(`/products/${product.id}`, product)
                dispatch(onLoading())
                dispatch(onUpdateProduct({ ...product }))
                return
            }
            //crear
            const { data } = await mrHarryAPI.post('/products/addnewproduct', product)
            dispatch(onLoading())
            dispatch(onAddNewProduct(data))
        } catch (error) {
            Swal.fire('Ups... something went wrong', error.response.data?.msg, 'error')
        }
    }

    const startDeletingProduct = async (product) => {
        try {
            await mrHarryAPI.delete(`/products/${product}`)
            dispatch(onLoading())
            dispatch(onDeleteProduct(product))
        } catch (error) {
            console.log(error)
            Swal.fire('Ups... something went wrong', error.response.data?.msg, 'error')
        }
    }

    return {
        // properties
        products,
        activeProduct,
        loadingProduct,

        //metodos
        startLoadingProduct,
        setActiveProduct,
        startSavingProduct,
        startDeletingProduct
    }
}
