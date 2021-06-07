// const express = require('express')
// const app = express();
//
// app.use(express.json());
var express = require('express')
var cors = require('cors')
var app = express()

app.use(express.json());
// USED???????
app.use(cors())




const db = require('./models')

//Routers
const seatRouter = require('./routes/seat.route')
    app.use("/seats", seatRouter);
const movieRouter = require('./routes/movie.route')
app.use("/movies", movieRouter);
const hallRouter = require('./routes/hall.route')
app.use("/halls", hallRouter);

db.sequelize.sync().then (() =>{
    app.listen(3001, () => {
        console.log("server running on port 3001");
    });
});
