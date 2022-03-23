module.exports = (Sequelize, type) =>{
    const Copie = Sequelize.define('copie', {
        id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
        number: type.INTEGER,
        format: type.STRING, // hay que cambiar a tipo de dato enum
        estatus: type.STRING // hay que cambiar a tipo de dato enum
    });
    return Copie;
};