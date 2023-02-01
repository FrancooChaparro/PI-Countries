import React from 'react';
import styles from "../Stylesheets/World.module.css"
import { Link } from 'react-router-dom';

export default function World() {
      
  return (
    <div>
      <Link to="/Home">
        <button className={styles.btn}>Home</button>
      </Link>
      <Link to={`/Detail/BRA`}>
        <div className={styles.brasil}>
        <img src="https://flagcdn.com/w320/br.png" alt="" className={styles.flags} />
        </div>
      </Link>
      <Link to={`/Detail/ARG`}>
        <div className={styles.argentina}>
        <img src="https://flagcdn.com/w320/ar.png" alt="" className={styles.flags} />
        </div>
      </Link>
      <Link to={`/Detail/USA`}>
        <div className={styles.usa}>
        <img src="https://flagcdn.com/w320/us.png" alt="" className={styles.flags} />
        </div>
      </Link>
      <Link to={`/Detail/ESP`}>
        <div className={styles.esp}>
        <img src="https://flagcdn.com/w320/es.png" alt="" className={styles.flags} />
        </div>
      </Link>
      <Link to={`/Detail/RUS`}>
        <div className={styles.rus}>
        <img src="https://flagcdn.com/w320/ru.png" alt="" className={styles.flags} />
        </div>
      </Link>
      <Link to={`/Detail/AUS`}>
        <div className={styles.aus}>
        <img src="https://flagcdn.com/w320/au.png" alt="" className={styles.flags} />
        </div>
      </Link>
      <Link to={`/Detail/MEX`}>
        <div className={styles.mex}>
        <img src="https://flagcdn.com/w320/mx.png" alt="" className={styles.flags} />
        </div>
      </Link> 
       <Link to={`/Detail/CAN`}>
        <div className={styles.can}>
        <img src="https://flagcdn.com/w320/ca.png" alt="" className={styles.flags} />
        </div>
      </Link>
      <Link to={`/Detail/CHN`}>
        <div className={styles.chi}>
        <img src="https://flagcdn.com/w320/cn.png" alt="" className={styles.flags} />
        </div>
      </Link>

    </div>
  )
}

