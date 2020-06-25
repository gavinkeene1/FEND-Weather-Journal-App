// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Set up async
const async = require('async');

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;

const server = app.listen(port, listening);

// Create a listening function to show that the server is running
function listening() {
  console.log('server running');
  console.log(`running on localhost: ${port}`);
}

//Create POST with a URL Path and a Callback Function
app.post('/addProjectData', addProjectData);

/* Create POST for adding new weather journal data to the
projectData array. Add feelings, data, and weather API data
using a function*/
//TODO: Consider if a way of refactoring would be a good option
function addProjectData (req, res) {
  projectData.temperature = req.body.temperature;
  projectData.date = req.body.date;
  projectData.feelings = req.body.feelings;
  res.send(projectData);
};

// Create a GET route with a URL Path and a Callback Function
app.get('/get', getProjectData);

function getProjectData (req, res) {
  res.send(projectData);
}
