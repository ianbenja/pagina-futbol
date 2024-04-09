import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import FormularioMod from "../componentes/FormularioMod";
import { useState } from "react";
import { listaEquipos, listaPosicion } from "../Otros/Constantes";

const Tabla = ({ List, title, deleteJug, putJugId }) => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);

  const handleClose = () => {
    setMostrarFormulario(false);
    setJugadorSeleccionado(null);
  };

  return (
    <>
      <div className="table-responsive">
        <h3>{title}</h3>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Posicion</th>
              <th>Equipo</th>
              <th>Valor</th>
              <th> </th>
            </tr>
          </thead>

          <tbody>
            {List.map((jugador, index) => (
              <tr key={index}>
                <td>{jugador.apellido.S}</td>
                <td>{jugador.nombre.S}</td>
                <td>{jugador.posicion.S}</td>
                <td>{jugador.equipo.S}</td>
                <td>${jugador.valor.S}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setJugadorSeleccionado(jugador);
                      setMostrarFormulario(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />{" "}
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger mr-4"
                    onClick={() => {
                      deleteJug(jugador.id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {mostrarFormulario && (
        <FormularioMod
          putFormId={putJugId}
          jugador={jugadorSeleccionado}
          handleClose={handleClose}
          equipos={listaEquipos}
          posicionJug={listaPosicion}
        />
      )}
    </>
  );
};

export default Tabla;
