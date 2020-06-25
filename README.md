# FEND-Weather-Journal-App
This is an asynchronous web app that uses Web API and user data to dynamically update the UI.

When a user enters their zipcode and their feelings about the weather in that zipcode, then clicks 'Generate', the weather journal returns the Most Recent Entry, which includes the date of the entry, the zipcode's temperature, and the user's entered feelings.

The temperature is pulled from the OpenWeatherMap API after providing it a zipcode and on the assumption that it will be a US zipcode.

The app runs using a Node and Express environment using cors() and body-parser with a simply set up server.

An updateUI function pulls the information for the app from its input fields and the OpenWeatherMap API to pass it to the innerHTML of corresponding DOM elements that are setup: #temp, #date, and #content.