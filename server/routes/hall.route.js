const express = require('express')
const hallRouter = express.Router()
const {Halls} = require("../models")

hallRouter.get("/", async (req,res) => {
    const listOfHalls = await Halls.findAll()
    res.json(listOfHalls);
});

hallRouter.post("/", async (req, res) => {
    const hall = req.body;

    await Halls.create(hall);

    res.json(hall);
});

module.exports = hallRouter;
