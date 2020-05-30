
/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

  console.log('hello');

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
