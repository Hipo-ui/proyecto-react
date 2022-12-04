import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cuadricula from './components/Cuadricula'
import Home from './Home'
import App from './components/App'
import _404 from './components/_404'
import "./main.css"
import CriptoPage from './components/cripto/CriptoPage'
import Perfil from './components/usuarios/Perfil'
import { UserContextProvider } from './context/UserContext'
import Login from './components/usuarios/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='perfil' element={<Perfil />} />
                </Route>

                <Route path='/criptomonedas' element={<App />}>
                    <Route index element={<Cuadricula />} />
                    <Route path=':name' element={<CriptoPage />} />
                </Route>

                <Route path='/login' element={<Login />} />

                <Route path='*' element={<_404 />} />
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
