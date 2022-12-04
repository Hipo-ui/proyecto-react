import axios from "axios"
import { useEffect, useState } from "react"

const usePetition = (endpoint) => {
    
    const API_URL = "https://pokeapi.co/api/v2/pokemon/"

    const [data, setData] = useState({})
    const [load, setLoad] = useState(false)

    useEffect(() => {

        setLoad(true)

        axios.get(`${API_URL}${endpoint}`)
            .then(data => {
                setData(data.data)
                setLoad(false)
                console.log(data.data)
            })
            .catch(e => {
                console.error(e)
                setLoad(false)
            })
    }, [])

    return [data, load]
}

export default usePetition;
