import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "./Actions";

const Details = () => {
    let { id: code } = useParams(); //por que le pone code al id?
    let [id] = useState(code);
    const dispatch = useDispatch();
    const country = useSelector((state) => state.country);
     let{
        name,
        flag,
        population,
        region,
        subregion,
        capital,
        activities,
        area,
     } = country;
    useEffect(() => {
        dispatch(getById(id));
    }, [dispatch, id]);

    return (
        <div className="container">
            <div>
                <img src={flag} alt="flag" width="100%" />
            </div>
            <div className="details">
                {/* Utilizamos la etiqueta de hipertexto <p> para ordenar los parrafos */}
                <h1>{name}</h1>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Subregion: {subregion}</p>
                <p>Capital: {capital}</p>
                <p>Area: {area}[km^2]</p>
                <p>Activities: {activities}</p>
            </div>

            <span>
                <h3>Activities:</h3>
                <ul>
                    {activities && activities.length ? (
                    activities.map((a) => (
                        <li key={a}>
                            {a.activity} Duracion: {a.duration} Dificultad: {a.difficulty}
                        </li>
                    ))
                    ) : (
                    <p>No hay actividades</p>
                    )}
                </ul>
            </span>
        </div>
    );
};

export default Details;