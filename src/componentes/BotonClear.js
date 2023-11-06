import React from "react";
import '../hojasEstilo/BotonClear.css'


const BotonClear = (props) => (
    <button 
        className='boton-clear' 
        onClick={props.manejarClear}
    >
        {props.children}
    </button>
);

export default BotonClear;