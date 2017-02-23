'use strict';

const getReviewsHandlebars = require('../templates/get-reviews.handlebars');
const showReviewsHandlebars = require('../templates/show-reviews.handlebars');


const onSuccess = function (data) {
console.table(data);
    let getReviewsHtml = getReviewsHandlebars({ reviews: data.reviews });
    $('#global-reviews').html(getReviewsHtml);
  };
  const onError = function (response) {
    console.error(response);
    // $('wanrning-content').text("Something's not right");
  };

const onShowSuccess = function(data){
  $('#show-review')[0].reset();
    console.table(data.reviews);
  let showReviewsHtml = showReviewsHandlebars({ reviews: data.reviews });
  $('#my-reviews').html(showReviewsHtml);
};
const onCreateSuccess =function() {
  $('#review-post')[0].reset();
  $('#wanrning-content').text("Review created!");
  setTimeout(function(){$('#wanrning-content').text(' ');}, 5000 );

  console.log('Successful log');

};
const onCreateError = function (response) {
  console.error(response);
  $('#review-post')[0].reset();
  $('#wanrning-content').text("Can't do that!");
  setTimeout(function(){$('#wanrning-content').text(' ');}, 5000 );
};

const onUpdateReviewSuccess = function (data) {
  if (data) {
    console.log(data);
      $('#update-review')[0].reset();
      $('#wanrning-content').text("Your Review had been updated!");
      setTimeout(function(){$('#wanrning-content').text(' ');}, 5000 );
  }
};

const onUpdateReviewError = function (response) {
  console.error(response);
  $('#update-review')[0].reset();
  $('#wanrning-content').text("You can't update a review you didn't write!");
  setTimeout(function(){$('#wanrning-content').text(' ');}, 5000 );
};

const onDeleteSuccess = function () {
  console.log('no content');
  $('#wanrning-content').text("You have deleted your review!");
  setTimeout(function(){$('#wanrning-content').text(' ');}, 5000 );
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
