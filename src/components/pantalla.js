import React from "react";
import '../styles/pantalla.css'

const Pantalla = ({ input }) => { // el => de la funcion flecha es similar al return() del function
    return (
        <div className="input">
            {input}
        </div>
    )
}

export default Pantalla;