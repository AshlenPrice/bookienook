'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');
const bookEvents = require('./book/events.js');
const reviewEvents = require('./reviews/events.js');


$(() => {
  setAPIOrigin(location, config);
  authEvents.addHandlers();
  bookEvents.addHandlers();
  reviewEvents.addHandlers();
});


require('./example');
