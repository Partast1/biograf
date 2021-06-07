module.exports = (sequelize, Sequelize) => {
    const Halls = sequelize.define("Halls", {
        hall_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: Sequelize.INTEGER
        }
    });

    return Halls;
};
