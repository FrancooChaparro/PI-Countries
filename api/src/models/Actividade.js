const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('actividade', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        Dificultad: {
            type: DataTypes.ENUM("1","2","3","4","5"),
        },
        Temporada: {
            type: DataTypes.ENUM("Verano","Otoño","Invierno","Primavera"),
        },
        Duración: {
            type: DataTypes.STRING,
        },
    }, { timestamps: false});
};

