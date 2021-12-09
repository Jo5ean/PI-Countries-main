import "./HomePage.css";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../../Components/Actions"
import { Link } from "react-router-dom";
import  Cards from "../../Components/Cards";
import { useParams } from "react-router";
// import Paginado from "../../Components/Paginado"; 


// Input de búsqueda para encontrar países por nombre
// Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /countries y deberá mostrar su:
// Imagen de la bandera
// Nombre
// Continente
// Botones/Opciones para filtrar por continente y por tipo de actividad turística
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
// Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina.

export default function Home() {
  
  let { page: pg, sort: srt } = useParams();
  console.log(pg, srt);
  let [page, setPage] = useState(pg?parseInt(pg) :1);
  let [sort, setSort] = useState(srt?`${srt}`: "AlphabeticAsc");
  const dispatch = useDispatch();
  let countriesPage = useSelector((state) => state.countriesPage);
  
  let lastPage = 25; //ponemos esto por que sino hace 26 paginas y la ultima esta vacia


  // const allCountries = useSelector((state) => state.countries);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [countriesPerPage, setCountriesPerPage] = useState(10);
  // const indexOfLastCountry = currentPage * countriesPerPage; //numero de la ultima carta
  // const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //numero de la primera carta
  // const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry); //paises de la pagina actual

  // const paginado = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  //   };


  useEffect(() => {
    dispatch(getPage(page, sort)); //map dispath to props
  }, [dispatch, page, sort]);

  ////SETEAMOS EL BOTON DE SIGUIENTE PAGINA////
  let [disable, setDisable] = useState({
    next: !page===lastPage,
    prev: !page===1,
  });

  function nextPage(e) {
    e.preventDefault();
   if(page < lastPage){
     setDisable({
       ...disable,
        next: false,
        prev: false,
      });

    setPage(page + 1);
   } else {
      setDisable({
        ...disable,
        next: true,
      });
    }
  }

  ////SETEAMOS EL BOTON DE PAGINA PREVIA////

  function prevPage(e) {
    e.preventDefault();
   if(page > 1){ //if(page > firstPage){
     setDisable({
        ...disable,
        prev: false,
        next: false,
      });
      setPage(page - 1);
   } else {
      setDisable({
        ...disable,
        prev: true,
      });
    }
  }
  
  function changeSort(e) {
    e.preventDefault();
    setSort(e.target.value);
  }

  return (
    <div>
      <div className="container">
        <Link to="/search">Buscar</Link>
        <button className = "btn" disabled={disable.prev} id="prev" onClick={(e)=>prevPage(e)}>
          <Link disabled={disable.prev} to={"/countries/"+ (page-1)}> {" < "} </Link>
        </button>
        <button className = "btn" disabled={disable.next} id="next" onClick={(e)=>nextPage(e)}>
          <Link disabled={disable.next} to={"/countries/"+ (page+1)}> {" > "} </Link>
        </button>
        <select className="btn" onChange={(e)=>changeSort(e)}>
          <option value="">Ordenar por:</option>
          <option value="AlphabeticAsc">Orden Alfabetico ʌ </option>
          <option value="AlphabeticDesc">Orden Alfabetico v </option>
        </select>
    </div>
    <Cards
      page={page}
      sort={sort}
      countries={countriesPage}
      nextPage={nextPage}
      prevPage={prevPage}
      changeSort={changeSort}
    />
    </div>
  );
}