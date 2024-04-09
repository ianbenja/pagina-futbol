import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaUp } from "@fortawesome/free-solid-svg-icons";
import { faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";

const TablaJug = ({ List, setOrd }) => {
  return (
    <>
      <div className="table-responsive">
        <h3>Jugadores</h3>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>
                Nombre{"  "}
                <button
                  className="btn btn-primary"
                  onClick={() => setOrd("asc")}
                >
                  <FontAwesomeIcon icon={faSortAlphaDown} />{" "}
                </button>
                {"  "}
                <button
                  className="btn btn-primary"
                  onClick={() => setOrd("desc")}
                >
                  <FontAwesomeIcon icon={faSortAlphaUp} />{" "}
                </button>
              </th>
              <th>Posicion</th>
              <th>Equipo</th>
              <th>Valor</th>
              <th> </th>
            </tr>
          </thead>

          <tbody>
            {List.map((jugador, index) => (
              <tr key={index}>
                <td>{jugador.apellido}</td>
                <td>{jugador.nombre}</td>
                <td>{jugador.posicion}</td>
                <td>{jugador.equipo}</td>
                <td>${jugador.valor}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TablaJug;
