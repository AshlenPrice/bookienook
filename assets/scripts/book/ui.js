'use strict';

const onSuccess = function (data) {
  if (data.book) {
    console.log(data.books);
  } else {
    console.log(data.books);
  }
};

const onIndexSuccess = function (data) {
  if (data.books) {
    console.log(data.books);
  }
};

const onGetSuccess = function (data) {
  if (data.book) {
    console.log(data.book);
  }
};

const onError = function (response) {
  console.error(response);
};

// const onPostSuccess = function (data) {
//   console.log(data);
// };
//
// const onPatchSuccess = function (data) {
//   console.log(data.book);
// };

module.exports = {
  onSuccess,
  onError,
  // onPostSuccess,
  // onPatchSuccess,
  onGetSuccess,
  onIndexSuccess,
};
