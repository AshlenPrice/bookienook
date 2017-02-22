'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
const store = require('../store');

const getFormFields = require('../../../lib/get-form-fields');


// const onGetBook = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//
//   if (data.book.id.length === 0) {
//     api.index()
//     .then(ui.onIndexSuccess)
//     .catch(ui.onError);
//   } else {
//     api.show(data.book.id)
//     .then(ui.onGetSuccess)
//     .catch(ui.onError);
//   }
// };
const onGetBooks = function (event) {
  event.preventDefault();
  api.getBooks()
  .then(ui.getBooksSuccess)
  // console.table(response.books);
    // .then((response) => {
    //   console.table(response['books']); // insert handlebars template
    // })
    .catch(ui.onError);
  };

  const onClearBooks = (event) => {
  event.preventDefault();
  ui.clearBooks();
};
  // stolen from below api.index() for troubleshooting clarity
  // if (store.data.books.length === 0) {
  //   api.index()
  //   .then(ui.onIndexSuccess)
  //   .catch(ui.onError);
  // } else {
  //   api.show(data.books)


const addHandlers = () => {
  $('#books-btn').on('click', onGetBooks);
  $('#clearBooksButton').on('click', onClearBooks);

};

module.exports = {
  // onGetBook,
  addHandlers
  };
