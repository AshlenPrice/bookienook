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
      store.review = response.review;
      return store.review;
    })
    .then(ui.onCreateSuccess)
    .catch(ui.onError);
};

const onShowReview = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  let id = data.review.id;
    api.showReview(id)
    .then(ui.onSuccess)
    .catch(ui.onError);
};

const onGetReviews = function (event) {
  event.preventDefault();
  api.indexReviews()
  .then(ui.onSuccess)
  .catch(ui.onError);
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
  // $('#sign-in').on('submit', onGetReviews);
  $('#show-review').on('submit', onShowReview);
  $('#reviews').on('submit', onGetReviews);
  $('#delete-review').on('submit', onDeleteReview);
  $('#update-review').on('submit', onUpdateReview);
  $('#review-post').on('submit', onCreateReview);
};

module.exports = {
   onCreateReview,
   onShowReview,
   onGetReviews,
   onUpdateReview,
   onDeleteReview,
   addHandlers
 };
