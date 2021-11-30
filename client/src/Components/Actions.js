import axios from "axios";

const GET_CREATEDB = "GET_CRETEDB"; //creamos database
const GET_ALL = "GET_ALL"; //obtenemos todos los datos
const GET_BY_ID = "GET_BY_ID"; //obtenemos un dato por id
const GET_BY_NAME = "GET_BY_NAME"; //obtenemos un dato por name

export const getCreatedb = () => {
  return async () => {
    const response = await axios.get(
      "http://localhost:3001/countries"
    );
    return { //cada return es a async a lo que un them es en una promesa?
      type: GET_CREATEDB,
      payload: response.data
    };
  };
};

export const getAll = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "http://localhost:3001/countries/all"
    );
    dispatch({ //por que l parentesis, por que el retunr arriba, PORQUEEEE!!!!
      type: GET_ALL,
      payload: response.data
    });
  };
};

export const getById = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/countries/${id}`
    );
    dispatch({
      type: GET_BY_ID,
      payload: response.data
    });
  };
}

export const getByName = (name) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/countries/name/${name}` //preguntar esto si esta bien
    );
    dispatch({
      type: GET_BY_NAME,
      payload: response.data
    });
  };
}