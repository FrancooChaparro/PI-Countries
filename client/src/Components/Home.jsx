import styles from "../Stylesheets/Home.module.css";
import React, {useState} from 'react';
import Nav from "./Nav";
import Cards from "./Cards"
import Filters from "./Filters";
import { useSelector } from "react-redux";
function Home ()  {
  let countries = useSelector((state) => state.countries);
  const [paginaa, setPaginaa] = useState(1)   // numero de pagina
  const [porPagina, SetPorPagina] = useState(8) // cuantos paises por pagina
  const maximo = countries.length / porPagina   // obtengo la ult pag

  return (
    <>
    <Nav paginaa={paginaa} setPaginaa={setPaginaa}/>
    <Filters paginaa={paginaa} setPaginaa={setPaginaa} maximo={maximo} />
    <Cards paginaa={paginaa} porPagina={porPagina} countries={countries}/>
  </>
  )
}

export default Home;