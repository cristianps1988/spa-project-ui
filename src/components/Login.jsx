import { useEffect, useState } from "react"
import { useAuthStore } from "../hooks"
import Swal from "sweetalert2"

export default function Login() {
    const { startLogin, errorMessage } = useAuthStore()

    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        startLogin(formValues)
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Authentication failed', errorMessage, 'error')
        }
    }, [errorMessage])


    return (
        <section className="h-auto w-full fixed py-4 bg-slate-900 z-[99] top-[80px] sm:top-[64px] lg:top-[76px]">
            <form onSubmit={handleSubmit} className="w-9/12 md:container mx-auto flex flex-col sm:flex-row gap-4 sm:justify-end">
                <div className="flex flex-col sm:flex-row gap-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            name="email"
                            value={formValues.email}
                            type="email"
                            className="grow"
                            placeholder="Email"
                            onChange={onInputChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            name="password"
                            value={formValues.password}
                            type="password"
                            className="grow"
                            placeholder="Password"
                            onChange={onInputChange} />
                    </label>
                    <button className="btn btn-primary btn-outline">Entrar</button>
                </div>
            </form>
        </section>
    )
}