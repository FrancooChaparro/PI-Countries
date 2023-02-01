import styles from "../Stylesheets/SearchBar.module.css";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../Redux/Actions";

function SearchBar({ setPaginaa, paginaa}) {
  const [countrie, setCountrie] = useState("");
  const dispatch = useDispatch();


  const countrieName = (e) => {
    setCountrie(e.target.value);

  }
  const handleSearch = (e) => {
    e.preventDefault()
    setPaginaa(paginaa=1)
    dispatch(getCountriesByName(countrie.trim()))
    setCountrie("")
  }


  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch(e)
    }
  }

  return (
    <div className={styles.containerBar}>
      <input name="Enter" onKeyPress={(e) => handleEnter(e)} className={styles.SearchBar} value={countrie} onChange={countrieName} type='text' />
      <button type="submit" className={styles.buttonADD} onClick={(e) => handleSearch(e)}>Agregar</button>
    </div>
  )
}

export default SearchBar;