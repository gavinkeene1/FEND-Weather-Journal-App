// API Key and URL for the app accessing OpenWeatherMap's API
const apiKey = 'a1e7e6a472a272ccef18e2b216f28db1';
const openWeatherURL = 'https://openweathermap.org/';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

console.log('hello');

// TODO:
// Create new weather journal data after the 'Generate' button's
// 'click' eventListener is triggered
const newJournalEntry = async event => {
  const zipCode = document.querySelector('#zip').value;
  console.log(zipCode);
  const feelings = document.querySelector('#feelings').value;
  console.log(feelings);
  // TODO: Get weather data for the current journal entry
  // TODO: use separate function for pulling in weather data
  const weatherData = await getWeather();

}

// Kick off a new weather journal entry (recording its data for the
// app) when the 'Generate' button is clicked
document.getElementById('generate').addEventListener('click', newJournalEntry);

// Create function for taking in Open Weather Map data and passing it
// into the function that creates new weather journal data entries
// TODO: Add in necessary arguments for getWeather to return data -
// Currently getting a url error because fetch argument(s) is
// not defined by something that will work
const getWeather = async () => {
  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("error", error);
}
};

// POST data to the appropriate URL path
// TODO: Make sure URL path is passed into the function whenever
// it is called
const postProjectData = async (url = '', data) => {
  console.log('hello');
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
      return response;
  } catch (error) {
    console.log("error", error);
  }
};

const getProjectData = async url => {
    try {
      const newData = await fetch(url);
      console.log(newData);
      return newData;
    } catch (error) {
      console.log("error", error);
    }
};
