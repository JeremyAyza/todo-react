import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../style/ListaDeTareas.css'
import Tarea from "./Tarea"

function ListaDeTareas() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea => {
    if(tarea.texto.trim()){
      tarea.texto=tarea.texto.trim();
      const tareasActualizadas=[tarea,...tareas];
      setTareas(tareasActualizadas);
      
    }
    
  });

  function eliminarTarea(id) {
    const tareasActualizadas=tareas.filter(tarea =>tarea.id!==id)
    setTareas(tareasActualizadas);
    
  };

  function completarTarea(id) {
    const tareasActualizadas=tareas.map(tarea=>{
      if (tarea.id===id) {
        tarea.completada=!tarea.completada;
        
      };
      return tarea;
    });
    setTareas(tareasActualizadas)
        
    
  }





  return (
    // fragmentos
    <>
      <TareaFormulario 
        onSubmit={agregarTarea} />
      <div className="tarea-lista-contenedor" >
        {
          tareas.map((tarea) => 
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          )
          
        }
      </div>

    </>



  )
}

export default ListaDeTareas;