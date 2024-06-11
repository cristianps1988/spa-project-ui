import { useDispatch, useSelector } from "react-redux"
import { clientSupa } from "../api/clientSupa"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store"
import { useNavigate } from "react-router-dom"

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const startLogin = async (values) => {
        dispatch(onChecking())
        try {
            const { data } = await clientSupa.auth.signInWithPassword(values)
            localStorage.setItem('token', data.session.access_token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({ email: data.user.email, uid: data.user.id }))
            navigate('/')

        } catch (error) {
            dispatch(onLogout('Incorrect credentials'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10)
        }
    }

    // const checkAuthToken = async () => {
    //     const token = localStorage.getItem('token')
    //     if (!token) return dispatch(onLogout())
    //     try {
    //         const { data } = await clientSupa.auth.signInWithPassword(values)
    //         localStorage.setItem('token', data.session.access_token)
    //         localStorage.setItem('token-init-date', new Date().getTime())
    //         dispatch(onLogin({ email: data.user.email, uid: data.user.id }))
    //     } catch (error) {
    //         localStorage.clear()
    //         dispatch(onLogout())
    //     }
    // }

    const startLogout = () => {
        localStorage.clear()
        // dispatch(onLogoutCalendar())
        dispatch(onLogout())
        dispatch(onLogoutEventForm())
    }

    return {
        // Properties
        status,
        user,
        errorMessage,

        // Methods
        startLogin,
        // checkAuthToken,
        startLogout
    }
}