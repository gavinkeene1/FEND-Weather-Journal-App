
/* Global Variables */

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
  // TODO: Get weather data for the current journal entry
}

// Kick off a new weather journal entry (recording its data for the
// app) when the 'Generate' button is clicked
document.getElementById('generate').addEventListener('click', newJournalEntry);

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
    } catch(error) {
      console.log("error", error);
    }
};
