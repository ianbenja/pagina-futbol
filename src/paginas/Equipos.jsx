import React, { Fragment, useEffect, useState } from "react";
import Menu from "../componentes/Menu";
import ComboEquipo from "../componentes/ComboEquipo";
import { Button } from "react-bootstrap";
import TablaJug from "../componentes/Tabla-jug";

import {} from "../services/jugadores";
import { listaEquipos } from "../Otros/Constantes";
import { obtenerJugadores } from "../services/equipos";

const Equipos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [jugadores, setJugadores] = useState([]);

  const [ordenamiento, setOrdenamiento] = useState("asc");
  useEffect(() => {
    actualizarTabla();
    console.log("Cambio de ordenamiento USE EFFECT");
  }, [ordenamiento]);

  const actualizarTabla = async () => {
    const jugadores = await obtenerJugadores(equipoSeleccionado, ordenamiento);
    setJugadores(jugadores);
    setMostrarTabla(true);
  };

  const [equipoSeleccionado, setEquipoSeleccionado] = useState("hola");

  return (
    <>
      <Menu />

      <div className="container pt-3">
        <h1>Equipos</h1>

        <ComboEquipo equipos={listaEquipos} setEqui={setEquipoSeleccionado} />
      </div>

      <div className="container pt-3">
        <Button onClick={actualizarTabla}>Buscar</Button>

        {mostrarTabla && (
          <TablaJug
            List={jugadores}
            equi={equipoSeleccionado}
            title="Jugadores"
            setOrd={setOrdenamiento}
          />
        )}
      </div>
    </>
  );
};

export default Equipos;
