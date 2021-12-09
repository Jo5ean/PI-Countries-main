import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName } from "./Actions";
import { useEffect, useState } from "react";
import Cards from "./Cards";

const Search = () => {
  let countriesPage = useSelector((state) => state.countriesPage); // carga el array de paises por nombre

  const actividad = [];
  countriesPage.map(
    //mapeo el array de paises traido del reducer
    //mapea segun un item, comprueba que exista la propiedad name y si existe mapea llenando el array con el nombre que busco por input (dato)
    (item) =>item.activities?.map((dato) => dato.name && actividad.push(dato.name)));
  const [filtro, setFiltro] = useState({ name: "", region: "", activity: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getByName(filtro.name, filtro.region, filtro.activity));
  }, [dispatch, filtro]);

  return (
    <div className="search">
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          placeholder="Buscar por nombre"
          onChange={(e) => setFiltro({ ...filtro, name: e.target.value })}
          name="username"
          value={filtro.name}
        />

        <select
          // className={select} //que significa esto ?  K-------------
          onChange={(e) => setFiltro({ ...filtro, region: e.target.value })}
        >
          <option value="">Seleccionar región</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Polar">Polar</option>
        </select>

        <select
          // className={select}
          onChange={(e) => setFiltro({ ...filtro, activity: e.target.value })}
        >
          <option value="">ALL</option>
          {actividad.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <Cards countries ={countriesPage} />
    </div>
  );
};

export default Search;
