// import mongoose
const mongoose = require('mongoose');

// mongoose connect to url
mongoose.connect(process.env.DATABASE_URL);
// mongoose.connect('mongodb+srv://admin:52o6Q00gUHy0bGtn@cluster0.yxzesjt.mongodb.net/?retryWrites=true&w=majority');

// Connection Events
mongoose.connection
	.on('open', () => console.log('Your are connected to mongoose'))
	.on('close', () => console.log('Your are disconnected from mongoose'))
	.on('error', (error) => console.log(error));

// export mongoose
module.exports = { mongoose };
