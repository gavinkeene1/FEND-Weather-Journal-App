// API Key and URL for the app accessing OpenWeatherMap's API
const apiKey = '0e9430ada5b89f2cc3e571dc36a855a0';
const openWeatherURL = 'https://api.openweathermap.org/data/2.5/weather';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Create new weather journal data after the 'Generate' button's
 'click' eventListener is triggered */
const newJournalEntry = async event => {
  const zipCode = document.querySelector('#zip').value;
  // The zipCode will have to follow with a US country code for now
  const zipAndCountryCode = `${zipCode},us`;
  const feelings = document.querySelector('#feelings').value;
  // Get weather data for the current journal entry
  try {
  const weatherData = await getWeather(openWeatherURL, apiKey);
  const newJournalData = {
    date: newDate,
    temperature: (weatherData.main.temp),
    feelings: feelings
  };
  await postProjectData('/addProjectData', newJournalData);
  const newData = await getProjectData('/get');
  const projectData = await newData.json();
  // Pass the new current data to updateUI() to show it on the page
  updateUI(projectData);
} catch (error) {
  console.log("error", error);
}
};

/* Kick off a new weather journal entry (recording its data for the
  app) when the 'Generate' button is clicked */
document.getElementById('generate').addEventListener('click', newJournalEntry);

// Create function for taking in Open Weather Map data and passing it
// into the function that creates new weather journal data entries
const getWeather = async (baseURL, apiKey, zipAndCountryCode = '19901,us') => {
  try {
    const response = await fetch(
      `${baseURL}?zip=${zipAndCountryCode}&appid=${apiKey}`);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("error", error);
}
};

// POST data to the appropriate URL path
const postProjectData = async (url, data) => {
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
      return response;
  } catch (error) {
    console.log("error", error);
  }
};

const getProjectData = async url => {
    try {
      const newData = await fetch(url);
      return newData;
    } catch (error) {
      console.log("error", error);
    }
};


// Update the UI with a new updateUI Function
// TODO: Consider if a way of refactoring would be a good option
const updateUI = async () => {
  const request = await fetch ('/get');
  try {
    const journalData = await request.json();
    document.querySelector('#temp').innerHTML = 'Temperature (kelvins): ' + journalData.temperature;
    document.querySelector('#date').innerHTML = 'Date: ' + journalData.date;
    document.querySelector('#content').innerHTML = 'Feelings: ' + journalData.feelings;
    // Reset the "Enter Zipcode" and "How are you feeling" fields
    document.querySelector('#zip').value = "";
    document.querySelector('#feelings').value = "";

  } catch (error) {
    console.log("error", error);
  }
}
