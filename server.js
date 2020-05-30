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
const port = 8000;

const server = app.listen(port, listening);

function listening() {
  // console.log(server);
  console.log('server running');
  console.log(`running on localhost: ${port}`);
}

//Create post() with url path and a callback function
app.post('/addProjectData', addProjectData);

// Create a post route for adding new weather journal data to the
// projectData array
// TODO: Add feelings, data, and weather API data to function
function addProjectData (req, res) {
  const body = req.body
  projectData.ProjectData = body.ProjectData;
  res.send('Test the POST route');
  projectData.push(req.body);
  console.log(projectData);
  console.log('ProjectData added');
};
