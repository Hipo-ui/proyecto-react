import { Link } from "react-router-dom"
import "./Cripto.css"

const Cripto = ({ name }) => {
    return (
        <Link to={`/criptomonedas/${name}`}>
            <div className="cripto-card">
                <h2 className="cripto-title" >{name}</h2>
            </div>
        </Link>
    )
}

export default Cripto