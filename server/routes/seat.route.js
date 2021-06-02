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
