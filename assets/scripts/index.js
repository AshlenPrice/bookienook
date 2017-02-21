'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');
const bookEvents = require('./book/events.js');


$(() => {
  setAPIOrigin(location, config);
  console.log(authEvents); // add a log here, everything look ok?
  authEvents.addHandlers();
  bookEvents.addHandlers();
});


// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
// $(() => {
//   authEvents.addHandlers();
//
// });
