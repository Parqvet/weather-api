const express = require('express');
const Success = require('../helpers/succesHandler');
const { findCities } = require('../services/cityService');
const { weatherByCoordinates } = require('../services/weatherService');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const cities = async (req, res) => {
    const cities = await findCities(req.params.city);
    const success = new Success(cities);

    res.json(success);

};

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
 const weatherByCoordinates = async (req, res) => {

    const { lon, lat } = req.query;

    const weather = await (lon, lat);
    const success = new Success(weather);

    res.json(success);

};

module.exports = {
    cities,
    weatherByCoordinates
}