const {seats} = require("../models")
const express = require('express')
const seatRouter = express.Router()
const {Seats} = require("../models")

seatRouter.get("/", async (req,res) => {
    const listOfSeats = await Seats.findAll()
    res.json(listOfSeats);
});

seatRouter.post("/", async (req, res) => {
    const seat = req.body;

    await Seats.create(seat);

    res.json(seat);
});

module.exports = seatRouter;

//
// module.exports = (app, db) => {
//     app.post('/seats', (req, res) => {
//         const created_at = new Date();
//         const newUser = req.body.seat;
//         db.seats.create({
//             number: seat.number,
//             role: newUser.role,
//             created_at: created_at
//         })
//             .then(user => {
//                 res.json(user);
//             });
//     });
// }
