import axios from "axios";

export function getCountries() {
  return async function (dispatch) {
    const response = await axios.get(
      "https://localhost:3001/api/" //preguntar a max si esta es la direccion corecta //aca conectamos con el back//
    );
    return dispatch({
      type: "GET_COUNTRIES",
      payload: response.data,
    });
  };
}