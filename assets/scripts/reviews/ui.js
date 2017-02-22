'use strict';


const onCreateSuccess =function() {
  console.log('Successful log');
};




const onShowSuccess = function(data){
    console.table(data.reviews);
  $('#view-my-reviews').css('display', 'initial');
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
  onShowSuccess,
  onUpdateReviewSuccess,
  onDeleteSuccess
};
