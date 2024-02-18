import FormTareas from "./components/FormTareas";
import ListaTareas from "./components/ListaTareas";
import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);
  console.log(tareas);
  return (
    <>
      <div className="container text-center pt-5">
        <h1>Tarea</h1>
        <div className="w-50 mx-auto">
          <FormTareas tareas={tareas} setTareas={setTareas} />
          <ListaTareas tareas={tareas} />
        </div>
      </div>
    </>
  );
}

export default App;
