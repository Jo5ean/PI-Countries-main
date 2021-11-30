import "./HomePage.css";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../Components/Actions"
import { Link } from "react-router-dom";
import  Card from "../../Components/Card"; 


// Input de búsqueda para encontrar países por nombre
// Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /countries y deberá mostrar su:
// Imagen de la bandera
// Nombre
// Continente
// Botones/Opciones para filtrar por continente y por tipo de actividad turística
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
// Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina.

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getAll()); //map dispath to props
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getAll());
  }
  return (
    <div className="home">
      <Link to="/countries/all"> Crear Pais</Link>
      <h1> COUNTRIES </h1>
      <button onClick={e=> {handleClick(e)}}> 
      Volver a Cargar Countries
      </button>

      <div>
        <select>
          <option value="pobAsc" >Ascendente</option>
          <option value="pobDesc">Descendente</option>
        </select>
        <select>
          <option value="region">Continente</option>
          <option value="activity">Region</option>
        </select>
        <select>
          <option value="All">Todos</option>
          <option value="created">Creados</option>
          <option value='api'>Existente</option>
        </select>
        {allCountries?.map((e) => {
          return (
            <fragment>
            <Link to={"/home/" + e.id}>
            <Card flag = {e.flag} name = {e.name} region = {e.region} key={e.id} />
            </Link>
            </fragment>
          );
          })}
      </div>
    </div>
  );
}

