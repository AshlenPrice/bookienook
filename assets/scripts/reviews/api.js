'use strict';
const config = require('../config');
const store = require('../store');


const createReview = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const indexReviews = function () {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const showReview = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const updateReviews = function (id, data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const destroyReviews = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    method: 'DELETE',
  });
};

module.exports = {
  indexReviews,
  showReview,
  createReview,
  updateReviews,
  destroyReviews,
};
