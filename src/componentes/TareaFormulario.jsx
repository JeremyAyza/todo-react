import React, { useState } from "react";
import '../style/TareaFormulario.css'
import {v4 as uuidv4} from 'uuid';


function TareaFormulario(props) {

  const [input, setInput] = useState("");



  const manejarCambio = e => {
    console.log("Escribiendo");
    setInput(e.target.value);
  }



  const manejarEnvio = e => {
    e.preventDefault();
    const nuevaTarea = {
      id: uuidv4(),
      texto: input,
      completada:false

    };
    
    props.onSubmit(nuevaTarea);
  }

  return (
    <form 
    className="tarea-formulario"
    onSubmit={manejarEnvio}
    >

      <input  
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />

      <button className="tarea-boton">
        Agregar tarea
      </button>
      
    </form>
    



  )
}

export default TareaFormulario;