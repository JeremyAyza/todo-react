import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import {FaReact} from "react-icons/fa";
function App() {
  return (
    <div className="aplicacion-tarea">
      
      <div className='todo-list-principal'>
        <h1>ToDo List - React App<FaReact className="icon"></FaReact></h1>
        <ListaDeTareas/>
        
      </div>

      
    </div>
  );
}

export default App;
