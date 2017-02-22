'use strict';

const getReviewsHandlebars = require('../templates/get-reviews.handlebars');
const showReviewsHandlebars = require('../templates/show-reviews.handlebars');


const onSuccess = function (data) {
console.table(data);
    let getReviewsHtml = getReviewsHandlebars({ reviews: data.reviews });
    $('#global-reviews').html(getReviewsHtml);
  };

const onCreateSuccess =function() {
  console.log('Successful log');
};


const onShowSuccess = function(data){
    console.table(data.reviews);
  let showReviewsHtml = showReviewsHandlebars({ review: data.reviews });
  $('#my-reviews').html(showReviewsHtml);
};


const onUpdateReviewSuccess = function (data) {
  if (data) {
    console.log(data);
  }
};

const onDeleteSuccess = function () {
  console.log('no content');
};
module.exports = {
  onCreateSuccess,
  onSuccess,
  onShowSuccess,
  onUpdateReviewSuccess,
  onDeleteSuccess,
  getReviewsHandlebars,
  showReviewsHandlebars
};
