import React, { Fragment, useEffect, useState } from "react";
import Menu from "../componentes/Menu";
import Tabla from "../componentes/Tabla";
import Formulario from "../componentes/Formulario";
import { listaEquipos, listaPosicion } from "../Otros/Constantes";

import {
  deleteJugadorId,
  getJugadores,
  postJugadores,
  putJugadorId,
} from "../services/jugadores";
import Swal from "sweetalert2";

const Jugadores = () => {
  const [listJugadores, setListJugadores] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(true); // Estado para controlar la visualización del formulario

  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getListJugadores();
  }, [refresh]);

  const getListJugadores = async () => {
    const response = await getJugadores();
    setListJugadores(response);
  };

  const postJugador = async (apellido, nombre, posicion, equipo, valor) => {
    const response = await postJugadores(
      apellido,
      nombre,
      posicion,
      equipo,
      valor
    );
    if (response === 201) {
      toggleFormulario();
      setRefresh(!refresh);
      Swal.fire({
        title: "Agregado!",
        text: "Tu jugador ha sido agregado.",
        icon: "success",
      });

      console.log("Exito");
    } else {
      console.log("Fracaso");
    }
  };

  const putJugaId = async (id, apellido, nombre, posicion, equipo, valor) => {
    const response = await putJugadorId(
      id,
      apellido,
      nombre,
      posicion,
      equipo,
      valor
    );
    if (response === 200) {
      toggleFormulario();
      setRefresh(!refresh);
      Swal.fire({
        title: "Agregado!",
        text: "Tu jugador ha sido modificado.",
        icon: "success",
      });

      console.log("Exito");
    } else {
      console.log("Entro en el catch de putJugaId");
      console.log(error);
      console.log("Fracaso");
    }
  };

  const deleteJugador = async (id) => {
    Swal.fire({
      title: "Esta seguro de eliminar este jugador?",
      text: "Esta accion no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteJugadorId(id);

        if (response === 204) {
          Swal.fire({
            title: "Eliminado!",
            text: "Jugador  eliminado.",
            icon: "success",
          });
          setRefresh(!refresh);
        } else {
          Swal.fire({
            title: "Error!",
            text: "Oops! Hubo un problema al eliminar",
            icon: "error",
          });
        }
      }
    });
  };

  const toggleFormulario = () => {
    setMostrarFormulario((prevState) => !prevState); // Cambia el estado para mostrar u ocultar el formulario
  };

  return (
    <>
      <Menu />

      <div className="container pt-3">
        <Formulario
          postForm={postJugador}
          equipos={listaEquipos}
          posicionJug={listaPosicion}
        />

        <Tabla
          List={listJugadores}
          title="Lista de Jugadores"
          deleteJug={deleteJugador}
          putJugId={putJugaId}
        />
      </div>
    </>
  );
};

export default Jugadores;
