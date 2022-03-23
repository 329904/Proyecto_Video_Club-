module.exports = (Sequelize, type) =>{
    const Member = Sequelize.define('member', {
        id: {type: type.INTEGER, primaryKey:true, autoIncrement:true},
        name: type.STRING,
        lastName: type.STRING,
        address: type.STRING,
        phone: type.STRING,
        status: type.BOOLEAN
    });
    return Member;
};