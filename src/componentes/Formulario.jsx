import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Formulario = ({ postForm, equipos, posicionJug }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [posicion, setPosicion] = useState("");
  const [equipo, setEquipo] = useState("");
  const [valor, setValor] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const limpiarForm = () => {
    setNombre("");
    setApellido("");
    setPosicion("");
    setEquipo("");
    setValor("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente
    const result = postForm(apellido, nombre, posicion, equipo, valor); // Llamar a la función postForm con los datos del formulario
    console.log(result);
    limpiarForm();
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                className="form-control "
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                className="form-control "
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
              <Form.Label>Posicion</Form.Label>
              <Form.Control
                as="select"
                rows={4}
                className="form-select "
                value={posicion}
                onChange={(e) => setPosicion(e.target.value)}
                required=""
              >
                <option value="" disabled>
                  Seleccione un valor
                </option>
                {posicionJug.map((pos, index) => (
                  <option key={index}>{pos}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlSelect2">
              <Form.Label>Equipo</Form.Label>
              <Form.Control
                as="select"
                rows={4}
                className="form-select "
                value={equipo}
                onChange={(e) => setEquipo(e.target.value)}
                required=""
              >
                <option value="" disabled>
                  Seleccione un valor
                </option>

                {equipos.map((equipo, index) => (
                  <option key={index}>{equipo}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="text"
                className="form-control "
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                required=""
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Formulario;
