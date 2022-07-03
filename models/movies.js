// Modelo para la tabla de Movies

module.exports = (sequelize, type) =>{
    return sequelize.define('movie', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: type.STRING,
        title: type.STRING,
        date: type.DATE,
        score: type.INTEGER 

    })

}