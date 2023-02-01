import styles from "../Stylesheets/Nav.module.css";
import { NavLink, useLocation } from 'react-router-dom';
import SearchBar from "./SearchBar";
import { useDispatch } from 'react-redux';
import { getCountries } from "../Redux/Actions";


function Nav({ paginaa, setPaginaa }) {
  const Location = useLocation();
  const dispatch = useDispatch();

  const getCoun = (e) => {
    e.preventDefault();
    dispatch(getCountries())
  }


  return (
    <div className={styles.containerAll_Nav}>
      <div className={styles.Nav}>
        <NavLink to="/World">
          <button className={styles.buttonNav}>World</button>
        </NavLink>
        <NavLink to="/Home">
          <button className={styles.buttonNav}>Home</button>
        </NavLink>
        <NavLink to="/About">
          <button className={styles.buttonNav}>About</button>
        </NavLink>
        <NavLink to="/Form">
          <button className={styles.buttonNav}>Form</button>
        </NavLink>
        {!(Location.pathname === "/About") && <button className={styles.buttonNav} onClick={getCoun}>Refresh</button>}
        {!(Location.pathname === "/About") && <SearchBar setPaginaa={setPaginaa} paginaa={paginaa}/>}
      </div>
    </div>
  )
}



export default Nav;