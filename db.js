//Configuración de la Base de Datos

const Sequelize = require('sequelize')

const MovieModel = require('./models/movies')
const AuthModel = require('./models/auth')


// Conexion con la DB
const sequelize = new Sequelize('9OjuOWNXc7', '9OjuOWNXc7', 'VXO3E5wC5Q', {
    host: 'remotemysql.com',
    dialect: 'mysql' 
})

const Movie = MovieModel(sequelize, Sequelize)
const Auth = AuthModel(sequelize, Sequelize)


//Sincronización con la tabla
sequelize.sync({force: false})
.then(()=>{
    console.log('Sinchronized tables')

})

module.exports = {
    Movie,
    Auth
}