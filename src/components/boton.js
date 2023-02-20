import React from "react";
import '../styles/boton.css'

function Boton(props) {

    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }

    return (
        <div
            className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} /*El método Trim nos permite remover espacios en una cadena de caracteres de el principio y del final, en este caso lo hacemos del Final*/
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton