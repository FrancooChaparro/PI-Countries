import styles from "../Stylesheets/Form.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postActivity } from "../Redux/Actions";



function validate(input) {

  let errors = {};
  const regexName = /^([a-zA-Z ]+)$/i;
  const regexNumber = /^[0-9]*$/i

  if (input.name && !regexName.test(input.name)) {
    errors.name = "The name can't include special characters or numbers";
  }
  if (!input.name) {
    errors.name = "Name is required";
  }
  if (input.name.length > 12) {
    errors.name = "Max 12 caracteres";
  }
  if (input.name.length < 3) {
    errors.name = "Min 3 caracteres";
  }
  if (input.Duración && !regexNumber.test(input.Duración)) {
    errors.Duración = "Solo numeros"
  }
  if (!input.Duración) {
    errors.Duración = "Completar el campo de duracion por favor";
  }
  if (input.Duración.length > 5) {
    errors.Duración = "Max 5 caracteres, completar numero en minutos";
  }

  if (!input.Country.length) {
    errors.Country = "Country is required";
  }
  if (!input.Dificultad) {
    errors.Dificultad = "Dificultad is required";
  }
  if (!input.Temporada) {
    errors.Temporada = "Temporada is required";
  }


  return errors;
};


function Form() {
  // const regexNumber = /^[0-9]*$/i
  const [open, setOpen] = useState(false);
  let countries = useSelector((state) => state.countries)
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: "",
    Dificultad: "",
    Temporada: "",
    Duración: "",
    Country: [],
  });

  // function controller() {
  //   if (open === false && input.Country === "") {
  //     setOpen(false)
  //   } else {
  //     setOpen(true)
  //   }
  // }

  function handleChange(e) {
    console.log(input.Country.length)
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  };

  function handleSelect(e) {
    input.Country.includes(e.target.value) ?
      alert("equal temperaments cannot be added") :
      setInput({
        ...input,
        Country: [...input.Country, e.target.value] //si quiero muchos ponerlo asi [...input.Country,e.target.value]
      })
  }

  function handleDelete(e) {

    setInput({
      ...input,
      Country: []
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (errors.name && errors.Dificultad && errors.Duración && errors.Country && errors.Temporada || input.name === "") {
      return alert("Completar los campos por favor")
    } else {


      const data = {
        name: "",
        Dificultad: "",
        Temporada: "",
        Duración: "",
        Country: [],
      };
      data.name = input.name
      data.Duración = input.Duración
      data.Dificultad = input.Dificultad !== "" ? input.Dificultad : ""
      data.Temporada = input.Temporada !== "" ? input.Temporada : ""
      data.Country = input.Country.length === 0 ? [] : input.Country
      if (input.Dificultad === "") {
        data.Dificultad = "1"
      }
      if (input.Temporada === "") {
        data.Temporada = "Verano"
      }
      if (input.Country.length === 0) {
        data.Country = ["PAN"]
      }

      if (input.Dificultad === "" || input.Temporada === "" || input.Country.length === 0) {
        dispatch(postActivity(data))
        alert("Activity Created");
        setInput({
          name: "",
          Dificultad: "",
          Temporada: "",
          Duración: "",
          Country: [],
        })




      } else {
        dispatch(postActivity(input));
        alert("Activity Created");
        setInput({
          name: "",
          Dificultad: "",
          Temporada: "",
          Duración: "",
          Country: [],
        });
      }


    }

  }
  return (
    <div className={styles.contenedor}>
      <div className={styles.ContainerBtn}>
      <Link to="/Home"><button className={styles.backBtn}>Back</button></Link>
      </div>

      <div className={styles.ContainerForm}>
        <h3 className={styles.title}>Create Activity!</h3>
        <form onSubmit={e => handleSubmit(e)}>
          <div className={styles.nameLabelNameBtn}>
            <label className={styles.nameLabel}>Name:</label>
            <input
              className={styles.inputCreate}
              type="text"
              value={input.name}
              name="name"
              onChange={e => handleChange(e)}
            />
          </div>
          {errors.name && (<p className={styles.spanError}>{errors.name}</p>)}
          <div className={styles.nameLabelNameBtn}>
            <label className={styles.nameLabel}>Dificultad:</label>
            <select className={styles.inputCreate} name="Dificultad" onChange={e => handleChange(e)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          {errors.Dificultad && (<p className={styles.spanError}>{errors.Dificultad}</p>)}
          <div className={styles.nameLabelNameBtn}>
            <label className={styles.nameLabel}>Temporada</label>
            <select className={styles.inputCreate} name="Temporada" onChange={e => handleChange(e)}>
              <option value={"Verano"}>Verano</option>
              <option value={"Otoño"}>Otoño</option>
              <option value={"Invierno"}>Invierno</option>
              <option value={"Primavera"}>Primavera</option>
            </select>
          </div>
          {errors.Temporada && (<p className={styles.spanError}>{errors.Temporada}</p>)}
          <div className={styles.nameLabelNameBtn}>
            <label className={styles.nameLabel}>Duración</label>
            <input
              className={styles.inputCreate}
              type="text"
              value={input.Duración}
              name="Duración"
              onChange={e => handleChange(e)}
              placeholder="Number"
            />
          </div>
          {errors.Duración && (<p className={styles.spanError}>{errors.Duración}</p>)}



          <div className={styles.nameLabelNameBtn}>
            <label className={styles.nameLabel}>Country:</label>
            <select onClick={() => setOpen(!open)} className={styles.inputCreate} name="Country" onChange={e => handleSelect(e)}>
              {!open && <option>Elegir pais</option>}

              {
                countries.map((el, index) => (
                  <option className={styles.hola} key={index} value={el.ID}>{el.Name}</option>
                ))
              }
            </select>
            <button className={styles.buttonCleanActivitis} type="button" onClick={e => handleDelete(e)}>Clean</button>
          </div>
          {errors.Country && (<p className={styles.spanError}>{errors.Country}</p>)}

          {
            input.Country.length !== 0 && <div className={styles.nameLabelNameBtn}>
              <ul className={styles.centradoUl}><li className={styles.listTemps}>{input.Country.map(e => e + ", ")}</li></ul></div>
          }

          {
            // input.name.length !== 0 && input.name.length >= 3 && input.name.length <= 12 &&
            // input.Duración && regexNumber.test(input.Duración) && input.Duración.length <= 5 &&
            // input.Country.length > 0 && input.Dificultad && input.Temporada &&

            // !errors.name && !errors.Dificultad && !errors.Duración && !errors.Country && !errors.Temporada && 

            <button className={styles.createBtn} type="submit" >Created Activity</button>
          }
        </form>
      </div>
    </div>
  );
};

export default Form;


