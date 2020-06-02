// API Key and URL for the app accessing OpenWeatherMap's API
const apiKey = '0e9430ada5b89f2cc3e571dc36a855a0';
const openWeatherURL = 'https://api.openweathermap.org/data/2.5/weather';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

console.log('Welcome to the Jungle');

// Create new weather journal data after the 'Generate' button's
// 'click' eventListener is triggered
const newJournalEntry = async event => {
  const zipCode = document.querySelector('#zip').value;
  // The zipCode will have to follow with a US country code for now
  const zipAndCountryCode = `${zipCode},us`;
  console.log(zipAndCountryCode);
  const feelings = document.querySelector('#feelings').value;
  console.log(feelings);
  // Get weather data for the current journal entry
  try{
  const weatherData = await getWeather(openWeatherURL, apiKey);
  const newJournalData = {
    temp: (weatherData.main.temp),
    date: newDate,
    feelings
  };
  await postProjectData('/addProjectData', newJournalData);
  console.log("postProject awaited");
  const newData = await getProjectData('/get');
  const projectData = await newData.json();
  console.log("New current data is ready to be used");
  console.log(projectData);
  // TODO: this function will pass the current data to updateUI()
} catch (error) {
  console.log("error", error);
}
};

// Kick off a new weather journal entry (recording its data for the
// app) when the 'Generate' button is clicked
document.getElementById('generate').addEventListener('click', newJournalEntry);

// Create function for taking in Open Weather Map data and passing it
// into the function that creates new weather journal data entries
const getWeather = async (baseURL, apiKey, zipAndCountryCode = '19901,us') => {
  try {
    const response = await fetch(
      `${baseURL}?zip=${zipAndCountryCode}&appid=${apiKey}`);
    const weatherData = await response.json();
    console.log("getWeather has finished")
    return weatherData;
  } catch (error) {
    console.log("error", error);
}
};

// POST data to the appropriate URL path
const postProjectData = async (url, data) => {
  console.log('Kicking off postProjectData');
;
    try {
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        // Body data type must match the "Content-Type" header
        body: JSON.stringify(data)
      });
      console.log("postProjectData has finished")
      return response;
  } catch (error) {
    console.log("error", error);
  }
};

const getProjectData = async url => {
  console.log("Kick off getProjectData");
    try {
      const newData = await fetch(url);
      console.log(newData);
      console.log("getProjectData has finished");
      return newData;
    } catch (error) {
      console.log("error", error);
    }
};


// TODO: update the UI with a new updateUI Function
