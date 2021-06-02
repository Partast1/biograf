module.exports = (sequelize, Sequelize) => {
    const Halls = sequelize.define("Halls", {
        number: {
            type: Sequelize.INTEGER
        }
    });

    return Halls;
};
