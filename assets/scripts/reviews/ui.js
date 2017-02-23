'use strict';

const getReviewsHandlebars = require('../templates/get-reviews.handlebars');
const showReviewsHandlebars = require('../templates/show-reviews.handlebars');


const onSuccess = function (data) {
console.table(data);
    let getReviewsHtml = getReviewsHandlebars({ reviews: data.reviews });
    $('#global-reviews').html(getReviewsHtml);
    $('.inputs').val('');
  };
  const onError = function (response) {
    console.error(response);
    // $('wanrning-content').text("Something's not right");
  };

const onShowSuccess = function(data){
    console.table(data.reviews);
  let showReviewsHtml = showReviewsHandlebars({ reviews: data.reviews });
  $('#my-reviews').html(showReviewsHtml);
};
const onCreateSuccess =function() {
  console.log('Successful log');
};
const onCreateError = function (response) {
  console.error(response);
  $('#wanrning-content').text("Can't do that!");
  setTimeout(function(){$('#wanrning-content').text(' ');}, 5000 );
};

const onUpdateReviewSuccess = function (data) {
  if (data) {
    console.log(data);
  }
};

const onUpdateReviewError = function (response) {
  console.error(response);
  $('#wanrning-content').text("You can't update a review you didn't write!");
  setTimeout(function(){$('#wanrning-content').text(' ');}, 5000 );
};

const onDeleteSuccess = function () {
  console.log('no content');
};
const onDeleteError = function (response) {
  console.error(response);
  $('#wanrning-content').text("You can't delete a review you didn't write!");
  setTimeout(function(){$('#wanrning-content').text(' ');}, 5000 );
};
module.exports = {
  onCreateSuccess,
  onCreateError,
  onSuccess,
  onShowSuccess,
  onError,
  onUpdateReviewSuccess,
  onUpdateReviewError,
  onDeleteError,
  onDeleteSuccess,
  getReviewsHandlebars,
  showReviewsHandlebars
};
