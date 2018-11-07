'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').html('Sign Up Successful! Please log in')
  $('#display-message').css('color', 'rgb(40, 140, 180)')
  $('#display-message').removeClass('hidden')
  $('#sign-up-form').trigger('reset')
  $('#signInBox').removeClass('hidden')
  $('#signUpBox').addClass('hidden')
}

const signUpFailure = function () {
  $('#display-message').html('Sign Up Failure, please try again')
  $('#display-message').css('color', 'red')
  $('#display-message').removeClass('hidden')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#display-message').html('Signed In As: ' + store.user.email + ', User ID: ' + store.user.id)
  $('#display-message').css('color', 'rgb(40, 140, 180)')
  $('#display-message').removeClass('hidden')
  $('#sign-in-form').trigger('reset')
  $('#signInBox').addClass('hidden')
  $('.changePass').removeClass('hidden')
  $('.signout').removeClass('hidden')
  $('.database').removeClass('hidden')
  $('.small').removeClass('hidden')
  $('#upload-form').removeClass('hidden')
  $('#showAll').removeClass('hidden')
  // $('#sign-up-form').addClass('hidden')
  // $('#change-password-form').removeClass('hidden')
  // $('#indexBikes').removeClass('hidden')
  // $('#create-bike-form').removeClass('hidden')
  // $('#show-bike-form').removeClass('hidden')
  // $('#update-bike-form').removeClass('hidden')
  // $('#delete-bike-form').removeClass('hidden')
}

const signInFailure = function () {
  $('#display-message').html('Sign In Failure, please try again')
  $('#display-message').css('color', 'rgb(40, 140, 180)')
  $('#display-message').removeClass('hidden')
  $('#sign-in-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').html('Sign Out successful')
  $('#display-message').css('color', 'rgb(40, 140, 180)')
  $('#display-message').removeClass('hidden')
  $('#signInBox').removeClass('hidden')
  // $('#sign-in-form').removeClass('hidden')
  // $('#change-password-form').addClass('hidden')
  $('.signout').addClass('hidden')
  $('#upload-form').addClass('hidden')
  $('#showAll').addClass('hidden')
  $('.password').addClass('hidden')
  $('.changePass').addClass('hidden')
  $('.small').addClass('hidden')
}

const signOutFailure = function () {
  $('#display-message').html('Log out unsuccessful, Please try again')
  $('#display-message').css('color', 'red')
  $('#display-message').removeClass('hidden')
}

const changePasswordSuccess = function () {
  $('#display-message').html('Password Change Successful')
  $('#display-message').css('color', 'rgb(40, 140, 180)')
  $('#display-message').removeClass('hidden')
  $('#change-password-form').trigger('reset')
  $('.password').addClass('hidden')
  $('.changePass').removeClass('hidden')
  $('.database').removeClass('hidden')
}

const changePasswordFailure = function () {
  $('#display-message').html('Password Change Failure, please try again')
  $('#display-message').css('color', 'red')
  $('#display-message').removeClass('hidden')
  $('#change-password-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
