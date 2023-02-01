import styles from "../Stylesheets/About.module.css";
import React from 'react';
import Nav from "./Nav";
function About() {
  return (
    <>
      <Nav />
      <div className={styles.About}>
        <h1>Franco Agustin Chaparro</h1>
        <p>Tengo 25 años, vivo en caballito CABA. Naci en bahia blanca.</p>
      </div>
    </>
  )
}

export default About;