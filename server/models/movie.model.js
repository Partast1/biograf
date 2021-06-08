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
    });

    return Movies;
};
