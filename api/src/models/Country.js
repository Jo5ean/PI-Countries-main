const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: { //alpha3Code
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    area: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};
// [ ] País con las siguientes propiedades:
// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población
