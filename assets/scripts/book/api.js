'use strict';
const config = require('../config');
const store = require('../store');

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET',
    headers: {
      // Authorization: `Token token=${store.user.token}`,
    },
  });
};

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/books/' + id,
    method: 'GET',
    headers: {
      // Authorization: `Token token=${store.user.token}`,
    },
  });
};

module.exports = {
  index,
  show,
};
