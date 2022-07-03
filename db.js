//Configuración de la Tabla

const Sequelize = require('sequelize')

const MovieModel = require('./models/movies')

const sequelize = new Sequelize('9OjuOWNXc7', '9OjuOWNXc7', 'VXO3E5wC5Q', {
    host: 'remotemysql.com',
    dialect: 'mysql' 
})

const Movie = MovieModel(sequelize, Sequelize)


//Sincronización con la tabla
sequelize.sync({force: false})
.then(()=>{
    console.log('Tablas Sincronizadas')

})

module.exports = {
    Movie
}