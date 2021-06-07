const express = require('express')
const hallRouter = express.Router()
const {Halls} = require("../models")

hallRouter.post("/", async (req, res) => {
    const hall = req.body;

    await Halls.create(hall);

    res.json(hall);
});


hallRouter.get("/", async (req,res) => {
    const listOfSeats = await Halls.findAll()
    res.json(listOfSeats);
});
//
// hallRouter.get = (app, db) => {
// app.get("/halls", async (req,res) => {
//     db.halls.findAll(
//         {
//             include:
//                 [
//                     {
//                     model: db.seats,
//
//                     }
//                 ],
//             include:
//                 [
//                     {
//                         model: db.movies
//                     }
//                 ]
//                 }
//     ).then(halls => {
//         const resObj = halls.map(hall => {
//
//             return Object.assign(
//                 {},
//                 {
//                     hall_id: hall.id,
//                     number: hall.number,
//                     seats: hall.seats.map(seat => {
//
//
//                         return Object.assign(
//                             {},
//                             {
//                                 seat_id: seat.id,
//                                 HallHallId: seat.HallHallId,
//                                 number: seat.number,
//                                 letter: seat.letter,
//                                 status: seat.status,
//
//
//
//                             }
//                         )
//                     }),
//                     movies: hall.movies.map(movie =>{
//
//                         return Object.assign(
//                             {},
//                             {
//                                 movie_id: movie.id,
//                                 HallHallId: movie.HallHallId,
//                                 movieName: movie.movieName,
//                                 runtime: movie.runtime,
//                                 movieDescription: movie.movieDescription
//
//                             }
//                         )
//                     })
//
//                 }
//             )
//         });
//
//     res.json(resObj);
// });
// });
// };
module.exports = hallRouter;
//
// hallRouter.post("/", async (req, res) => {
//     const hall = req.body;
//
//     await Halls.create(hall);
//
//     res.json(hall);
// });
//
// // module.exports = hallRouter;
