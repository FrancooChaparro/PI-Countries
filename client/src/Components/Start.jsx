import styles from "../Stylesheets/Start.module.css";
import React from 'react';
import { Link } from "react-router-dom";

function Start ()  {
  return (
    <div className={styles.container}>
      <Link to="/Home">
      <button className={styles.start}>START</button>
      </Link>
    </div>
  )
}

export default Start;