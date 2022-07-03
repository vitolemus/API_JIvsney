module.exports = (sequelize, type) =>{
    return sequelize.define('movie', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncremnt: true
        },
        image: type.STRING,
        title: type.STRING,
        date: type.DATE,
        score: type.INTEGER 

    })

}