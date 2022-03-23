module.exports = (Sequelize, type) =>{
    const Actor = Sequelize.define('actor', {
        id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
        name: type.STRING,
        lastName: type.STRING
    });
    return Actor;
};
