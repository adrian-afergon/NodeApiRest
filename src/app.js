import express from 'express';  // ES6 import!

export const app = express(); // We export app to import it into index.js later on
// PORT is now gone

app.get('/:timestamp', (request, response) => { // Arrow funtion!
  var timestamp = request.params.timestamp;
  response.status(200).json(getTimestampJSON(timestamp)); // I'm sending a 200 OK status with the response JSON no!
});

function getTimestampJSON(timestamp) {
  var result = {
    unix: null,
    natural: null
  };

  var date;
  if (!isNaN(parseInt(timestamp))) {
    date = new Date(parseInt(timestamp));
  } else {
    date = new Date(timestamp);
  }
  if (!isNaN(date.getTime())) {
    result.unix = date.getTime();
    result.natural = getNaturalDate(date);
  }

  return result;
}

function getNaturalDate(date) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // String interpolation!
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}