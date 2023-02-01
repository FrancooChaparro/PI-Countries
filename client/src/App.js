import './App.css';
import { Routes, Route, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import useMousePosition from "./Hooks/UseMousePosition";
import Start from './Components/Start';
import Details from './Components/Details';
import Home from './Components/Home';
import About from './Components/About';
import Form from './Components/Form';
import Footer from './Components/Footer';
import World from './Components/World';
import {useDispatch} from "react-redux";
import {useEffect} from 'react';
import { getCountries, getActivitis } from "./Redux/Actions";

function App() {
  const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(getCountries())
  },[dispatch])

  useEffect(()=>{
    dispatch(getActivitis())
  },[dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Start />} />      
        <Route path='/Detail/:id' element={<Details  />} />
        <Route path='/Home' element={<Home  />} />
        <Route path='/About' element={<About />} />
        <Route path='/World' element={<World />} />
        <Route path='/Form' element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
