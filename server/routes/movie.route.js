const express = require('express')
const movieRouter = express.Router()
const {Movies} = require("../models")

movieRouter.get("/", async (req,res) => {
    const listOfMovies = await Movies.findAll()
    res.json(listOfMovies);
});

movieRouter.post("/", async (req, res) => {
    const movie = req.body;

    await Movies.create(movie);

    res.json(movie);
});

module.exports = movieRouter;
