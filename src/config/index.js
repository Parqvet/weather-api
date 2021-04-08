const dotenv = require('dotenv');

// para saber si existe .env
const envFound = dotenv.config();

if(!envFound) {
    throw new Error("Couldn't find .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: '/api/v1'
    },
    log: {
        level: process.env.LOG_LEVEL
    },
    swagger: {
        path: '/documentation'
    },
    mapbox: {
        pathBase: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
        apikey: process.env.MAPBOX_API_KEY
    },
    openweathermap: {
        pathbase: '',
        apikey: process.env.OPENWEATHERMAP_API_KEY
    }
}