module.exports = (Sequelize, type) =>{
    const Genre = Sequelize.define('genre', {
        id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
        description: type.STRING,
        status: type.BOOLEAN
    });
    return Genre;
};