module.exports = function testhej (sequelize, Sequelize)  {
    const Movies = sequelize.define("Movies", {
        movie_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        movieName: {
            type: Sequelize.STRING
        },
        runtime: {
            type: Sequelize.INTEGER
        },
        movieDescription: {
            type: Sequelize.STRING
        },
        HallHallId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
        // ,
        // hall_id_fk: {
        //     type: Sequelize.INTEGER,
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

    return Movies;
};
