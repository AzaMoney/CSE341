
const routes = require('express').Router();
const controller = require('../controllers/home')

routes.get('/', controller.buildHomePage);

module.exports = routes;