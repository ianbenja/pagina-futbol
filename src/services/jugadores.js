import axios from "axios";

const url_api =
  "https://pwd56jvftk.execute-api.sa-east-1.amazonaws.com/jugadores";
export const getJugadores = async () => {
  try {
    const response = await axios.get(url_api);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Entro en el catch");
    return [];
  }
};

export const deleteJugadorId = async (id) => {
  const response = await axios.delete(`${url_api}/${id.S}`);

  try {
    return response.status;
  } catch (error) {
    return false;
  }
};

export const getJugadorId = async (id) => {
  try {
    const response = await axios.get(`${url_api}/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};

export const postJugadores = async (
  apellido,
  nombre,
  posicion,
  equipo,
  valor
) => {
  const response = await axios.post(url_api, {
    apellido,
    nombre,
    posicion,
    equipo,
    valor,
  });
  try {
    return response.status;
  } catch (error) {
    return false;
  }
};

export const putJugadorId = async (
  id,
  apellido,
  nombre,
  posicion,
  equipo,
  valor
) => {
  console.log(id.S);
  console.log(apellido);
  console.log(nombre);
  console.log(posicion);
  console.log(equipo);
  console.log(valor);
  console.log(typeof posicion);
  console.log(typeof equipo);

  const response = await axios.put(`${url_api}/${id.S}`, {
    apellido,
    nombre,
    posicion,
    equipo,
    valor,
  });
  try {
    return response.status;
  } catch (error) {
    console.log("Entro en el catch de putJugadorId");
    console.log(error);
    return false;
  }
};
