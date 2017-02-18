'use strict';

const success = () => {
  $('#prompt').text('Action Successful');
};

const signUpSuccess = () => {
  $('#sign-up-prompt').text('Account Created!');
  $('#sign-up')[0].reset();
  // $('#sign-up-prompt')[0].reset();
  $('#signUpModal').modal('hide');
};

const signUpFail = () => {
  $('#sign-up-prompt').text
  ('Something\'s not right. Please Try Again!');
};

const signInFail = () => {
  $('#sign-in-prompt').text('Something\'s not right. Please Try Again!');
};

const changePwSuccess = () => {
  $('#change-password')[0].reset();
  $('#change-pw-prompt').text('Password Changed Successfully!');
  $('#changePwModal').modal('hide');
};

const changePwFail = (data) => {
  $('#change-pw-prompt').text
  ('Something\'s not right. Please Try Again!');
};

const failure = () => {
  $('#prompt').text
  ('Theres seems to have been an error');
};
// On sign in, un-hide game board elements

const signInSuccess = () => {
  $('#sign-in')[0].reset();
    $('#prompt').text('Sign In success!');
  $('#signInModal').modal('hide');
};

//   $('#signUpButton').addClass('hidden');
//   $('#signInButton').addClass('hidden');
//   $('#changePwButton').removeClass('hidden');
//   $('#sign-out').removeClass('hidden');



const signOutSuccess = () => {
  $('#prompt').text('Sign Out Successful! Please Register or Sign In to write reviews!');

};
//   $('#signUpButton').removeClass('hidden');
//   $('#signInButton').removeClass('hidden');
//   $('#changePwButton').addClass('hidden');
//   $('#sign-out').addClass('hidden');
//   $('#right-column').addClass('hidden');
//   $('#change-pw-prompt').text
//   (' ');
//   $('#sign-up-prompt').text
//   (' ');
//   $('#sign-in-prompt').text
//   (' ');






module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  changePwFail,
  changePwSuccess,
  signOutSuccess,
};
