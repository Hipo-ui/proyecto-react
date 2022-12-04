import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Bienvido una aplicación con React</h1>
            <Link to="/criptomonedas">Explorar</Link>
        </>
    )
}

export default Home
