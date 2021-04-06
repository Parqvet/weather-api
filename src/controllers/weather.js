const express = require('express');
const { findCities } = require('../services/cityService');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const cities = async (req, res) => {
    
    res.json(await findCities(req.params.city));

};

module.exports = {
    cities
}