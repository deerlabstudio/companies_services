const express = require('express');
const cors = require('cors');

/** Express App */
const app = express();

/** Middlewares */
const errorHandler = require('./middlewares/error-handler');

/** controllers */
const HealthCheckController = require('./controllers/HealthCheck');
const CompaniesController = require('./controllers/Companies');

app.use(express.json());
app.use(cors());
app.use(new HealthCheckController(express.Router()).router);
app.use(new CompaniesController(express.Router()).router);
app.use(errorHandler());

module.exports = app;
