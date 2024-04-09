import Form from "react-bootstrap/Form";
import React, { useState } from "react";

const ComboEquipo = ({ equipos, setEqui }) => {
  const [equipo, setEquipo] = useState(""); // Move the declaration outside of the handleEquipoChange function

  const handleEquipoChange = (event) => {
    setEquipo(event.target.value); // Update the value of equipo
    setEqui(event.target.value); // Update the value of equipo in the parent component
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="SelectEquipos">
          <Form.Control
            as="select"
            rows={5}
            className="form-select"
            required=""
            value={equipo}
            onChange={handleEquipoChange}
          >
            <option value="" disabled>
              Seleccione un valor
            </option>
            {equipos.map((equipo, index) => (
              <option key={index}>{equipo}</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>

      <div style={{ display: "flex", alignItems: "center" }}>
        <span>Equipo</span>

        {equipo !== "" && (
          <img
            src={`/equipos/${equipo}.png`}
            alt="Logo del equipo"
            style={{ width: "100px", height: "100px", marginLeft: "10px" }}
          />
        )}

        {equipo === "" && (
          <img
            src={`/equipos/afa.png`}
            alt="Logo del equipo"
            style={{ width: "80px", height: "80px", marginLeft: "25px" }}
          />
        )}
      </div>
    </>
  );
};

export default ComboEquipo;
