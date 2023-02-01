const { Router } = require('express');
const { Country, Actividade } = require("../db")
const {
  getCountries,
  getCountriesToDataBase,
  findCountries,
  getCountriesByID,
  createNewActivity,
  getAllActivitis,
  findActivity } = require("../Controllers/getCountrys")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const regex_FullText = /^([a-zA-Z ]+)/i;


// Ruta Traigo todas las actividades o alguna por query (lo uso para los filters, esto lo hice aparte de lo que me piden)
router.get("/activitis", async (req, res) => { 
  const { name } = req.query;
  let activitis ;
  try {
    if (name) { 
      activitis = await findActivity(name.trim());
      res.status(200).json({
        status: true,
        result: activitis
      });

    } else {
    activitis = await getAllActivitis();
    res.status(200).json({
      status: true,
      result: activitis
    });
  }
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: `Entro al catch, ${error.message}`,
      errorCode: 400
    });
  }

})

// Ruta busco pais por query si hay, sino traigo todos los paises
router.get("/countries", async (req, res) => {
  const { name } = req.query;
  let Countrys


  try {
    if (name) {
      if (name.trim() === "") {
        Countrys = await getCountries();
        res.status(200).json({
          status: true,
          result: Countrys
        });
      } else {
        if (regex_FullText.test(name)) {

          Countrys = await findCountries(name.trim());
          if (Countrys.length == 0) {
            res.status(500).json({
              status: false,
              msg: `No se encontro ningun pais con el atributo ${name}`,
              errorCode: 12
            })

          } else {
            res.status(200).json({
              status: true,
              result: Countrys
            });
          }
        } else {
          res.status(500).json({
            status: false,
            msg: `Formato de busqueda invalido`,
            errorCode: 14
          });
        }
      }
    } else {
      Countrys = await getCountries();
      res.status(200).json({
        status: true,
        result: Countrys
      });
    }


  } catch (error) {
    res.status(400).json({
      status: false,
      msg: `Entro al catch, ${error.message}`,
      errorCode: 400
    });
  }
})


// Carga la base de datos 
router.get("/loadCountriesDB", async (req, res) => {
  let Countrys = await getCountriesToDataBase();
  try {
    let dbase = await Countrys.map(e => {
      Country.create({
        ID: e.Id,
        Name: e.Name,
        Img: e.Img,
        Contienente: e.Contienente,
        Capital: e.Capital,
        Subregion: e.Subregion,
        Area: e.Area,
        Poblacion: e.Poblacion
      })

    })
    res.status(200).json({ msg: "Database Loaded" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

// Ruta traigo el country por params
router.get("/countries/:id", async (req, res) => {
  const { id } = req.params;
  let Countrys;
  try {
    if (regex_FullText.test(id)) {
      if (id.trim().length > 3) {
        res.status(500).json({
          status: false,
          msg: `Parametro de busqueda invalido`,
          errorCode: 15
        })
      } else {
        Countrys = await getCountriesByID(id.toUpperCase().trim());
        if (Countrys === null || Countrys === "null") {
          res.status(500).json({
            status: false,
            msg: `Parametro de busqueda invalido`,
            errorCode: 10
          });
        } else {
          res.status(200).json({
            status: true,
            result: Countrys
          });
        }
      }
    } else {
      res.status(500).json({
        status: false,
        msg: `Parametro de busqueda invalido`,
        errorCode: 16
      })
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: `Entro al catch, ${error.message}`,
      errorCode: 400
    });
  }
})

// Ruta Creo una actividad nueva post
router.post("/activities", async (req, res) => { 
  const {name, Dificultad, Temporada, Duración, Country} = req.body;
  console.log(req.body);
  try {
    if (name && Dificultad && Temporada && Duración && Country ) { 
    const newActivity = await createNewActivity((name.toUpperCase()), Dificultad, Temporada, Duración);
    await newActivity.addCountries(Country)
    res.status(200).json(newActivity);
    } else { 
      res.status(500).json({
        status: false,
        msg: `Por favor completar todos los campos requeridos.`,
        errorCode: 9
      });
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: `Entro al catch, ${error.message}`,
      errorCode: 400,
    });
  }
})




module.exports = router;
