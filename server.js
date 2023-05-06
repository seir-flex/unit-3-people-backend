///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// get .env variables
require('dotenv').config();
// pull PORT from .env, give default value of 3000
const { PORT = 3000 } = process.env;
// import express
const express = require('express');
// create application object
const app = express();
// import middlware
const cors = require('cors');
const morgan = require('morgan');

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan('dev')); // logging
app.use(express.json()); // parse json bodies

// create a test route
app.get('/', (req, res) => {
	res.send('hello world');
});


const peopleController = require('./controllers/people');
app.use('/people', peopleController);

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
