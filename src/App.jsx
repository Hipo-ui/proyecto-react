import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const API_URL = import.meta.env.VITE_API_URL 
  //${API_URL}
  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`https://api.coincap.io/v2/assets`)
      .then((data) => {
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error("La petición ha fallado")
      })
  }, [])

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
    <h1>Lista de criptomonedas</h1>

    <ol>
      {criptos.map(({name}) => (
        <li key={name}>Nombre: {name}</li>
      ))}
    </ol>
    </>
    
  )
}

export default App
