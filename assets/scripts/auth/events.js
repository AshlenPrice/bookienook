'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');

// these functions will run the server requests in the api.js file
const onSignUp = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
    ;

};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data); // everything look good?
  api.signIn(data)
    .then((response)=> {
      console.log(response); // everything look good?
      store.user = response.user;
      return store.user;
    })
    .then(ui.signInSuccess)
    .catch(ui.signInFail);
    // $('#sign-in')[0].reset();


};

const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFail);
};

const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete store.user;
      return store;
    })
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail);
};

const addHandlers = () => {
 $('#sign-up').on('submit', onSignUp);
 $('#sign-in').on('submit', onSignIn);
 $('#sign-out').on('click', onSignOut);
 $('#change-password').on('submit', onChangePassword);
};




module.exports = {
 addHandlers,
};
