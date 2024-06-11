import { useDispatch, useSelector } from "react-redux"
import { onLoadCategories, onLoadGenders } from "../store"
import mrHarryAPI from "../api/mrHarryAPI"


export const useProductFormStore = () => {

    const dispatch = useDispatch()
    const { category, gender } = useSelector(state => state.productForm)

    const startLoadingCategories = async () => {
        try {
            const { data } = await mrHarryAPI.get('/categories')
            dispatch(onLoadCategories(data))
        } catch (error) {
            console.log(error)
        }
    }

    const startLoadingGenders = async () => {
        try {
            const { data } = await mrHarryAPI.get('/gender')
            dispatch(onLoadGenders(data))
        } catch (error) {
            console.log(error)
        }
    }



    return {
        // properties
        category,
        gender,

        //metodos
        startLoadingCategories,
        startLoadingGenders
    }
}
