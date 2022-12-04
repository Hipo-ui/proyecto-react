import { useParams } from "react-router-dom"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./Info/CriptoInfo"

const CriptoPage = () => {

    const params = useParams()

    const [poke, loadPoke] = usePetition(params.name)

    if (loadPoke) return <span>Cargando...</span>
    else if (!poke.species || !poke.sprites) return <span>Cargando...</span>

    return (
        <>
            <CriptoInfo poke={poke} />
        </>
    )
}

export default CriptoPage
