'use strict';
const config = require('../config');
const store = require('../store');

const getBooks= function () {
  return $.ajax({
    url: config.apiOrigin + '/books',
    method: 'GET',
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
  getBooks,
  show,
};
