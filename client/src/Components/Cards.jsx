import styles from "../Stylesheets/Cards.module.css";
import React from 'react';
import Card from "./Card";


function Cards({ paginaa, porPagina, countries}) {

  return (
    <div className={styles.containerImg}>
      {
        countries.length > 0 && countries.map((e, index) => {
          return (
              <Card key={index} continente={e.Contienente} name={e.Name} image={e.Img} capital={e.Capital} subregion={e.Subregion} area={e.Area} poblacion={e.Poblacion} actividades={e.actividades} id={e.ID} />
          )
  }).slice((paginaa - 1 ) * porPagina, (paginaa - 1) * porPagina + porPagina)
}
      </div>
 
  )
}

export default Cards;

