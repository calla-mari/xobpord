'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-message').html('Sign up successful! Please log in')
  $('#display-message').css('color', 'rgb(40, 140, 180)')
  $('#display-message').removeClass('hidden')
  $('#sign-up-form').trigger('reset')
  $('#signInBox').removeClass('hidden')
  $('#signUpBox').addClass('hidden')
}

const signUpFailure = function () {
  $('#display-message').html('Sign up failure, please try again')
  $('#display-message').css('color', 'red')
  $('#display-message').removeClass('hidden')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#display-message').html('Welcome to Xobpord!!')
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
}

const signInFailure = function () {
  $('#display-message').html('Sign in failure, please try again')
  $('#display-message').css('color', 'red')
  $('#display-message').removeClass('hidden')
  $('#sign-in-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-message').html('Sign out successful')
  $('#display-message').css('color', 'rgb(40, 140, 180)')
  $('#display-message').removeClass('hidden')
  $('#signInBox').removeClass('hidden')
  $('.signout').addClass('hidden')
  $('#upload-form').addClass('hidden')
  $('#showAll').addClass('hidden')
  $('.password').addClass('hidden')
  $('.changePass').addClass('hidden')
  $('.small').addClass('hidden')
  $('.display-uploads').addClass('hidden')
  $('#upload-form').trigger('reset')
  $('.display-uploads').addClass('hidden')
}

const signOutFailure = function () {
  $('#display-message').html('Log out unsuccessful, please try again')
  $('#display-message').css('color', 'red')
  $('#display-message').removeClass('hidden')
}

const changePasswordSuccess = function () {
  $('#display-message').html('Password change successful')
  $('#display-message').css('color', 'rgb(40, 140, 180)')
  $('#display-message').removeClass('hidden')
  $('#change-password-form').trigger('reset')
  $('.password').addClass('hidden')
  $('.changePass').removeClass('hidden')
  $('.database').removeClass('hidden')
}

const changePasswordFailure = function () {
  $('#display-message').html('Password change Failure, please try again')
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
