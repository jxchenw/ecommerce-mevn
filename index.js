const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

const app = express();

// connect to database
mongoose.connect('mongoDB://localhost/products');
mongoose.Promise = global.Promise;

// middleware
app.use(bodyParser.json());

// set up headers
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'Get, Post, Put, Delete');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
});

// initialize apis
app.use('/api', routes);

// error handling
app.use(function(err, req, res, next) {
	res.status(422).send({ error: err.message });
});

// listening to the req
app.listen(process.env.port || 4000, function() {
	console.log('Listening to the request');
});