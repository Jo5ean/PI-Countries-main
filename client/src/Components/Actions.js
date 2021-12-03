import axios from 'axios';

const GET_CREATEDB = "GET_CRETEDB"; //creamos database
const GET_ALL = "GET_ALL"; //obtenemos todos los datos
const GET_BY_ID = "GET_BY_ID"; //obtenemos un dato por id
const GET_BY_NAME = "GET_BY_NAME"; //obtenemos un dato por name
const GET_PAGE = "GET_PAGE"; //obtenemos una pagina

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
      "http://localhost:3001/countries?page=all"
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

export const getByName = (name, onlyName, region, activity) => {
  return async (dispatch) => {
    let response;
    console.log(name);
    response = await axios.get("http://localhost:3001/countries?page=all");
    if (name) {
      response = await axios.get("http://localhost:3001/countries?name=" + name);
    }
    if (region) {
      Array.isArray(response.data) &&
        (response.data = response.data.filter((el) => el.region === region));
    }
    if (activity) {
      Array.isArray(response.data) &&
        (response.data = response.data.filter(
          (el) => el.activities.filter((el) => el.name === activity).length
        ));
    }
    if (onlyName) {
      Array.isArray(response.data) && (response.data = response.data.map((el) => el.name));
    }
    dispatch({ type: GET_BY_NAME, payload: response.data });
  };
};

export const getPage = (page, sort) => {
  return async (dispatch) => {
    const response = await axios.get(
      "http://localhost:3001/countries?page=" + page + "&sort=" + sort // al parecer va con suma, para que sea dentro de page y se pase como query no como parametro
    );
    dispatch({
      type: GET_PAGE,
      payload: response.data
    });
  };
}