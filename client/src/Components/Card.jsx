import styles from "../Stylesheets/Card.module.css";
import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { getCountriesById } from "../Redux/Actions";




function Card ({continente, name, image, id})  {
   const dispatch = useDispatch();


   const cardDet = (e) => {
      e.preventdefault();
      dispatch(getCountriesById(id))
   }

   

  return (
    <div className={styles.card}>
    <Link style={{ textDecoration: "none" }} to={"/Detail/" + id} onClick={(e) => cardDet(e)}>
       <img src={image} alt="countrie" />
       <div className={styles.data}>
          <h2>{name}</h2>
          <h3>{continente}</h3>
       </div>
    </Link>
 </div>
  )
}

export default Card;