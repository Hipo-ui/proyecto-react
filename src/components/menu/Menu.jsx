import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import "./Menu.css"

const Menu = () => {

    const user = useContext(UserContext)
    const navigation = useNavigate()

    return (
        <nav className="main-menu">
            <ul className="container-menu">
                <li>
                    <NavLink to="/" className='link-menu'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/criptomonedas" className='link-menu'>Listado</NavLink>
                </li>
                <li>
                    <NavLink to="/perfil" className='link-menu'>Perfil de {user.name}</NavLink>
                </li>
                <li>
                    <a onClick={()=>{
                        localStorage.removeItem("tokenUser")
                        navigation("/login")
                    }}>Cerrar sesión</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu
