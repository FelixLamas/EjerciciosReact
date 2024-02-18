/* eslint-disable react/prop-types */

const ListaTareas = ({ tareas }) => {
  return (
    <div>
      <h2>Listado de tareas</h2>

      <ol>
        {tareas.map((element, index) => {
          return <li key={index}>Tarea: {element}</li>;
        })}
      </ol>
    </div>
  );
};
export default ListaTareas;
