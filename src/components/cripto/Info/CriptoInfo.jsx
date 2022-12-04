const CriptoInfo = ({ poke }) => {
    return (
        <>
            <div>
                {
                    (poke.sprites) && (
                        <img src={poke.sprites.back_default} alt={poke.name} />
                    )
                }
            </div>
            <div>
                <ul>
                    <li>
                        Nombre: {poke.name}
                    </li>
                    <li>
                        Altura: {poke.height}
                    </li>
                    <li>
                        Peso: {poke.weight}
                    </li>
                    <li>
                        Especie: {poke.species.name}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CriptoInfo