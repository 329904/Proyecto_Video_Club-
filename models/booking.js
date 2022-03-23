module.exports = (Sequelize, type) =>{
    const Booking = Sequelize.define('booking', {
        id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
        date: type.STRING // hay que cambiar a tipo de dato TIMESTAMP
    });
    return Booking;
};