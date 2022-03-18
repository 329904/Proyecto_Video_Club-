module.exports = (Sequelize, type) =>{
    const Director = Sequelize.define('director', {
        id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
        name: type.STRING,
        lastName: type.STRING
    });
    return Director;
};
