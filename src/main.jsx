import React from "react";
import ReactDOM from "react-dom/client";
import Rutas from "./rutas/Rutas";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const listaEquipos = [
  "argentinos",
  "atleticotucuman",
  "banfield",
  "barracas",
  "belgrano",
  "bocajuniors",
  "centralcordoba",
  "defensayjusticia",
  "estudiantes",
  "gimnasia",
  "godoycruz",
  "huracan",
  "independiente",
  "independienteriv",
  "instituto",
  "lanus",
  "newells",
  "platense",
  "racing",
  "riestra",
  "river",
  "rosariocentral",
  "sanlorenzo",
  "sarmiento",
  "talleres",
  "tigre",
  "union",
  "velez",
];

const listaPosicion = ["Arquero", "Defensor", "Mediocampista", "Delantero  "];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Rutas />
  </React.StrictMode>
);
