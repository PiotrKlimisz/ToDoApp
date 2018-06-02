// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// const router = express.Router();
const database = require('./config/database');

// Connect to mongoDB database
mongoose.connect(database.url);
// Routing
// Configure port
const port = 8080;
// Listen to port
app.listen(port);
console.log(`Server is running on port: ${port}`);

app.use(express.static('./'));

require('./config/routes')(app);

// //Set app to use express backend router
// app.use(router);