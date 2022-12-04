import { useEffect, useState } from "react"
import axios from "axios"
import Cripto from "./cripto/Cripto"
import "../main.css"
import "./Cuadricula.css"

function Cuadricula() {

  const API_URL = import.meta.env.VITE_API_URL
  //${API_URL}
  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((data) => {
        console.log(data.data.results)
        setCriptos(data.data.results)
      })
      .catch(() => {
        console.error("La petición ha fallado")
      })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <div className="main-container">

        <div className="content">
          <h1 className="header">Listado</h1>

          <div className="cripto-content">
            {criptos.map(({ name }) => (
              <Cripto key={name} name={name} />
            ))}
          </div>
        </div>

      </div>
    </>

  )
}

export default Cuadricula
