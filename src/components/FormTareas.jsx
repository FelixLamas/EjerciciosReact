import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const FormTareas = ({ tareas, setTareas }) => {
  const [tarea, setTarea] = useState("");

  return (
    <Form className="mb-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="fs-4">Ingresar la tarea:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa la tarea"
          onChange={(e) => {
            setTarea(e.currentTarget.value);
          }}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          setTareas([...tareas, tarea]);
          setTarea("");
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default FormTareas;
