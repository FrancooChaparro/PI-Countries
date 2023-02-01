import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { orderByName, orderByContinent, orderByPoblacion, orderByActivity } from "../Redux/Actions";
import styles from "../Stylesheets/Filters.module.css";

function Filters({ paginaa, setPaginaa, maximo }) {
    let activitis = useSelector((state) => state.activitis); // Traigo todas las actividades
    let activitisName = activitis.map(e => e.name)           // mapeo los nombres de las actividades en una variable
    let unicos = [];                                         // creo un arreglo en donde voy a pushear los nombres Actividades

    for (var i = 0; i < activitisName.length; i++) {      // pusheo todos los nombres de las actividades y los repetidos los dejo afuera
      const elemento = activitisName[i];
      if (!unicos.includes(activitisName[i])) {
        unicos.push(elemento);
      }
    }


    const nextPage = () => {
        setPaginaa(paginaa + 1)
    }
    const prevPage = () => {
        setPaginaa(paginaa - 1)
    }


    const dispatch = useDispatch();


    function handleSort(e) {
        if (e.target.value == "Filters") return;
        e.preventDefault();
        setPaginaa(paginaa = 1)
        dispatch(orderByName(e.target.value));
    };
    function handleContinent(e) {
        if (e.target.value == "Contienente") return;
        e.preventDefault();
        setPaginaa(paginaa = 1)
        dispatch(orderByContinent(e.target.value));
    };

    function handlePoblacion(e) {
        if (e.target.value == "Population") return;
        e.preventDefault();
        setPaginaa(paginaa = 1)
        dispatch(orderByPoblacion(e.target.value));    
    };

    function handleActivity(e) {
        e.preventDefault();
        setPaginaa(paginaa = 1)
        dispatch(orderByActivity(e.target.value));
    };


    return (
        <div className={styles.allFilters}>
            <div>
                <button className={styles.filterAZ} onClick={() => prevPage()} disabled={paginaa === 1 || paginaa < 1}>Back</button>
            </div>
            <div>
                <button className={styles.filterAZ}>{paginaa}</button>
            </div>
            <div>

                <button className={styles.filterAZ} onClick={() => nextPage()} disabled={paginaa === maximo || paginaa > maximo}>Next</button>
            </div>
            <div>
                <select className={styles.filterAZ} onChange={e => handleSort(e)}>
                    <option value="Filters">Filters</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
            </div>
            <div>
                <select className={styles.filterContienent} onChange={e => handleContinent(e)}>
                    <option value="Contienente">Continent</option>
                    <option value="Europe">Europe</option>
                    <option value="South America">South America</option>
                    <option value="Asia">Asia</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">North America</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <div>
                <select className={styles.filterActividad} onChange={e => handleActivity(e)} >
                    {
                        unicos.length > 0 && unicos.map((e, index) => {
                            return (
                                <option key={index} value={`${e}`}>{`${e}`}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div>
                <select className={styles.filterPoblacion} onChange={e => handlePoblacion(e)}>
                    <option value="Population">Population</option>
                    <option value="max">Mas Poblacion</option>
                    <option value="min">Menos Poblacion</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;