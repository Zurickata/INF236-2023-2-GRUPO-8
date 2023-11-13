import { useState } from "react"
import './Formulario.css'
export function Formulario({ setUser }) {
    const [nombre, setNombre] = useState("")
    const [contrasena, setcontrasena] = useState("")
    const [error, setError] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (nombre === "" || contrasena === "") {
            setError(true)
            return
        }
        else {
            setError(false)
        }

        setUser([nombre])
    }

    return (
        <section>
            <h1>Login</h1>
            <form
                className="formulario"
                onSubmit={handleSubmit}
            >
                <input type="text"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />

                <input type="password"
                    value={contrasena}
                    onChange={e => setcontrasena(e.target.value)}
                />
                <button>Iniciar sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}