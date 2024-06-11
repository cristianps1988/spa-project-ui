import { lazy } from "react"
const HomePage = lazy(() => import("./HomePage"))
const Login = lazy(() => import("../components/Login"))


export default function LoginPage() {

    return (
        <>
            <Login />
            <HomePage />
        </>
    )
}