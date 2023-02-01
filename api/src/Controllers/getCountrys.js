const { Country, Actividade } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");



//////////////////////////////////////////////////////////////////////////////

// Lleno la base de datos
const getCountriesToDataBase = async () => {
    let response = await axios.get("https://restcountries.com/v3/all");
    return await response.data.map(e => {
        return {
            Id: e.cca3,
            Name: e.name.common,
            Img: e.flags[1],
            Contienente: e.continents ? e.continents[0] : "unknown",
            Capital: e.capital ? e.capital[0] : "unknown",
            Subregion: e.subregion,
            Area: e.area,
            Poblacion: e.population,
        }
    })
};

//Busco por query el nombre de la actividad
const findActivity = async (name) => { 
    const activity = await Actividade.findAll({
        where: {
            name: { [Op.iLike]: `%${name}%` },
        },include: {
            model: Country,
            attributes: ["Name","ID"],
            through: {
                attributes: [],
            },
        },
})
return activity;
}

//Traigo todas las actividades de la tabla "actividades"
const getAllActivitis = async () => {
    const activitis = await Actividade.findAll({
        include: {
            model: Country,
            attributes: ["Name","ID"],
            through: {
                attributes: [],
            },
        },
    });
    return activitis;
}

//Traigo todos los paises de la tabla "countries"
const getCountries = async () => {
    const countries = await Country.findAll({
        include: {
            model: Actividade,
            attributes: ["name","Dificultad", "Temporada", "Duración"],
            through: {
                attributes: [],
            },
        },
    });
    return countries;
}

//Busco el pais por query 
const findCountries = async (name) => {

    const results = await Country.findAll({
        where: {
            Name: { [Op.iLike]: `%${name}%` },
        }, include: {
            model: Actividade,
            attributes: ["name","Dificultad", "Temporada", "Duración"],
            through: {
                attributes: [],
            },
        },
    });
    return results
}

//Busco el pais por params
const getCountriesByID = async (id) => {
    const results = await Country.findByPk(id, {
        include: {
            model: Actividade,
            attributes: ["name","Dificultad", "Temporada", "Duración"],
            through: {
                attributes: [],
            },
        },

    });
    return results
}

// Creo una nueva actividad en la base de datos "Actividade"
const createNewActivity = async (name, Dificultad, Temporada, Duración) => {
        const newActivity = await Actividade.create({ name, Dificultad, Temporada, Duración })
        return newActivity
    }


module.exports = {
    getCountries,
    getCountriesToDataBase,
    findCountries,
    getCountriesByID,
    createNewActivity,
    getAllActivitis,
    findActivity
}