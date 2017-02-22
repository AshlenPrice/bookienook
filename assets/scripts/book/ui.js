'use strict';
const showBooksTemplate = require('../templates/book-listing.handlebars');


const onSuccess = function (data) {
  if (data.book) {
    console.log(data.books);
  } else {
    console.log(data.books);
  }
};

const getBooksSuccess = (data) => {
  console.table(data.books);

  let showBooksHtml = showBooksTemplate({ books: data.books });
$('.bookslist').append(showBooksHtml);
};


const clearBooks = () => {
  $('.bookslist').empty();
};

const onError = function (response) {
  console.error(response);
};



module.exports = {
  onSuccess,
  onError,
  getBooksSuccess,
  clearBooks
};
