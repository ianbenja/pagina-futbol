import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../paginas/Home";
import Jugadores from "../paginas/Jugadores";
import Equipos from "../paginas/Equipos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jugadores",
    element: <Jugadores />,
  },
  {
    path: "/equipos",
    element: <Equipos />,
  },
]);

const Rutas = () => {
  return <RouterProvider router={router} />;
};
export default Rutas;
