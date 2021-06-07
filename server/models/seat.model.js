module.exports = (sequelize, Sequelize) => {
    const Seats = sequelize.define("Seats", {
        seat_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        letter: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        HallHallId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
        // ,
        // hall_id_fk: {
        //     type: DataTypes.INTEGER,
        //
        //     references: {
        //         // This is a reference to another model
        //         model: Halls,
        //
        //         // This is the column name of the referenced model
        //         key: 'hall_id_fk'
        //     }
        // }
    });
    return Seats;
};
