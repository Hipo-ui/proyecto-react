import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [load, setLoad] = useState(false)
    const [error, setError] = useState()

    const submit = (e)=> {
        e.preventDefault()
        setLoad(true)
        setError(null)
        axios.post('https://reqres.in/api/login', user)
        .then(data => {
            setLoad(false)
            localStorage.setItem("tokenUser", data.data.token)
            navigation("/")
        })
        .catch(e => {
            setLoad(false)
            console.log(e)
            setError(e.response.data.error)
        })
    }

    if (localStorage.getItem("tokenUser")) return <Navigate to="/" />

    return (
        <>
            <div className="loginContainer">
                <h1>Inicio de sesión</h1>

                <form onSubmit={submit} action="">
                    <div>
                        <label htmlFor="email">Correo electrónico</label>
                        <input required onChange={(e) => {
                            setUser({
                                ...user,
                                email: e.target.value
                            })
                        }} type="email" name="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input required onChange={(e) => {
                            setUser({
                                ...user,
                                password: e.target.value
                            })
                        }} type="password" name="password" id="password" />
                    </div>

                    <div>
                        <input type="submit" value={load ? "Cargando..." : "Ingresar"} />
                    </div>
                </form>
                <span>{
                    (error) && (
                        JSON.stringify(error)
                    )
                }</span>
            </div>
        </>
    )
}

export default Login;
