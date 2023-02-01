const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    ID : { 
      type : DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      unique: true,
    }, 
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Img: { 
      type : DataTypes.STRING, 
      allowNull: false,
    },
    Contienente: { 
      type : DataTypes.STRING, 
      allowNull: false,
    },
    Capital : { 
      type : DataTypes.STRING, 
      allowNull: false,
    }, 
    Subregion : { 
      type : DataTypes.STRING, 
      
    }, 
    Area : { 
      type : DataTypes.STRING, 
      
    }, 
    Poblacion : {
      type : DataTypes.INTEGER, 
     
    },
   
  },  { timestamps: false});
};

