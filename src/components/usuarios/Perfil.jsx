import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Perfil = () =>{

    const user = useContext(UserContext)

    return(
        <div>
            Perfil de {user.name}
        </div>
    )
}

export default Perfil;
