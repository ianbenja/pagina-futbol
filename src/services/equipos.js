import axios from "axios";

const url_api = "https://pwd56jvftk.execute-api.sa-east-1.amazonaws.com";
export const obtenerJugadores = async (equipo, ordenamiento) => {
  try {
    const response = await axios.get(
      `${url_api}/${equipo}/jugadores?orden=${ordenamiento}`
    );
    if (response.status === 200) {
      //console.log(`${url_api}/${equipo}/jugadores`);
      //console.log(response.data);
      return response.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Entro en el catch");
    return [];
  }
};
