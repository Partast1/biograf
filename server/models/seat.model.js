module.exports = (sequelize, DataTypes) => {
    const Seats = sequelize.define("Seats", {
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        letter: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hallFK: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Seats;
};
