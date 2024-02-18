import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Ejercicio2 = ({ mensaje }) => {
  const [msj, setMsj] = useState("");
  return (
    <div>
      <h1>
        Hola {mensaje} {msj}
      </h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setMsj("(Modificando el estado de un componente)")}
      >
        Hacer click
      </button>
    </div>
  );
};

export default Ejercicio2;
