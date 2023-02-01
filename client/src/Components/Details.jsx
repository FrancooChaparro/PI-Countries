import styles from "../Stylesheets/Details.module.css";
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";



function Details() {
  const [countrie, setCountrie] = useState({}); // En este estado voy a guardar la info del pais que voy a tener por id
  const { id } = useParams();  // Consigo el id 

  const [set, setSet] = useState(true)
  let activitis = useSelector((state) => state.activitis)

// Con un useEffect obtengo la info y la guardo en el state y aparte dejo vacio el state
  useEffect(() => {
    fetch(`http://localhost:3001/countries/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCountrie(data.result);
      })
      .catch((error) => console.log(error));
    return () => setCountrie({});
  }
    , []);

  // Filtro las actividades en el arreglo que tengo el ID del pais lo comparo con el id del pais que esta en Details
  const actividad = activitis.filter(e => e.countries[0].ID === id)


  return (
    <div className={styles.supreme}>
      <div className={styles.ContainerDetails}>
        <div className={styles.ContainerButton}>
          <Link to="/Home">
            <button className={styles.atras}>Home</button>
          </Link>
          <Link to="/World">
            <button className={styles.button}>World</button>
          </Link>
        </div>

        <div className={styles.ContainerData}>

          <div className={styles.data1}>
            <div className={styles.ContainerImage}>
              <img src={countrie.Img} alt="" />
            </div>
            <h1> {countrie.ID}</h1>
          </div>

          {set ? <div className={styles.data2}>
            <div >
              <h2>Nombre  </h2>
              <h2>Contienente </h2>
              <h3>Capital </h3>
              <h3>Area </h3>
              <h3>Subregion </h3>
              <h3>Poblacion </h3>
            </div>
            <div>
              <h2>{countrie.Name}</h2>
              <h2>{countrie.Contienente}</h2>
              <h3>{countrie.Capital}</h3>
              <h3>{countrie.Area} </h3>
              <h3>{countrie.Subregion}</h3>
              <h3>{countrie.Poblacion}</h3>
            </div>
          </div> : <div className={styles.data2}>
            {actividad.length ?
              <div >
                <h1 style={{"marginTop": "-150px"}}>Actividades</h1>
                {actividad.map((e, index) => {
                  return  <div style={{"display": "flex", "justifyContent" : "flex-start"}} key={index} >
                            <h3 style={{"fontSize": "12px"}}>Nombre  {e.name}</h3>
                            <h3 style={{"fontSize": "13px"}}>Dificultad {e.Dificultad} </h3>
                            <h3 style={{"fontSize": "12px"}}>Temporada  {e.Temporada} </h3>
                            <h3 style={{"fontSize": "12px"}}>Duración {e.Duración}  minutos </h3>
                          </div>    
                })}
              </div>
              : <h3>No hay actividades existentes en este pais</h3>}
          </div>}

        </div>
        <div className={styles.ShowActivity}>
       { set ? <button onClick={()=> setSet(!set)}>Mostrar Activades</button> : <button onClick={()=> setSet(!set)}>Mostras informacion</button>}
        </div>
      </div>
    </div >
  )
}

export default Details;

