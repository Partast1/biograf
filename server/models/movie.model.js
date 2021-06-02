module.exports = (sequelize, Sequelize) => {
    const Movies = sequelize.define("Movies", {
        movieName: {
            type: Sequelize.STRING
        },
        runtime: {
            type: Sequelize.INTEGER
        },
        movieDescription: {
            type: Sequelize.STRING
        },
        hallFK: {
            type: Sequelize.INTEGER
        }
    });

    return Movies;
};
