import styles from "../Stylesheets/Footer.module.css";
import React from 'react';

function Footer ()  {
  return (
    <div className={styles.Footer} >
    {/* <div className={styles.DivIcons}>
        <a href="mailto:francoo_chaparro@hotmail.com" rel="noopener noreferrer" target="_blank"><SiGmail className={styles.iconosFooter} /></a>
        <a href="https://github.com/FrancooChaparro" rel="noopener noreferrer" target="_blank"><SiGithub className={styles.iconosFooter}/></a>
        <a href="https://www.linkedin.com/in/franco-chaparro-134743252/" rel="noopener noreferrer" target="_blank"><SiLinkedin className={styles.iconosFooter}/></a>
    </div> */}
    <div>
        <h5 className={styles.tituloFooter}>By Franco Chaparro</h5>
    </div>
</div>
  )
}

export default Footer;