'use strict';
const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');

const getFormFields = require('../../../lib/get-form-fields');

const onCreateReview = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.createReview(data)
    .then((response) => {
      store.log = response.log;
      return store.log;
    })
    .then(ui.onCreateSuccess)
    .catch(ui.onError);
};

const onGetReviews = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  if (data.review.id.length === 0) {
    api.indexReviews()
    .then(ui.onSuccess)
    .catch(ui.onError);
  } else {
    api.showReview(data.review.id)
    .then(ui.onSuccess)
    .catch(ui.onError);
  }
};

const onUpdateReview = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.updateReviews(data.review.id, data)
    .then(ui.onUpdateReviewSuccess)
    .catch(ui.onUpdateError);
};

const onDeleteReview = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  api.destroyReviews(data.review.id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteError);
};



const addHandlers = () => {
  // $('#log-search').on('submit', onGetReviews);
  $('#delete-review').on('submit', onDeleteReview);
  $('#update-review').on('submit', onUpdateReview);
  $('#review-post').on('submit', onCreateReview);
};

module.exports = {
   onCreateReview,
   onGetReviews,
   onUpdateReview,
   addHandlers
 };
