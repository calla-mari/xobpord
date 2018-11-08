'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const uploadEvents = require('./upload/events')
const config = require('./config.js')
const store = require('./store')

$(() => {
  $('.display-uploads').addClass('hidden')
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('.signout').on('click', authEvents.onSignOut)
  // 'create account' button
  $('.createAccount').on('click', authEvents, () => {
    $('#signInBox').addClass('hidden')
    $('#signUpBox').removeClass('hidden')
    $('#display-message').addClass('hidden')
  })
  // 'Back to log in' button
  $('.backToLogIn').on('click', authEvents, () => {
    $('#signInBox').removeClass('hidden')
    $('#signUpBox').addClass('hidden')
  })
  // form-control input field
  $('.form-control').on('click', authEvents, () => {
    $('#display-message').addClass('hidden')
  })
  $('.inputBox').on('click', authEvents, () => {
    $('#display-message').addClass('hidden')
  })
  // 'changePass' password change button
  $('.changePass').on('click', authEvents, () => {
    $('.password').removeClass('hidden')
    $('#change-password-form').trigger('reset')
    $('.changePass').addClass('hidden')
    $('.database').addClass('hidden')
    $('#display-message').addClass('hidden')
    $('.display-uploads').addClass('hidden')
    $('#upload-form').trigger('reset')
  })
  // 'cancel' password change button
  $('#cancel').on('click', authEvents, () => {
    $('.password').addClass('hidden')
    $('#change-password-form').trigger('reset')
    $('#display-message').html('Did NOT change password')
    $('#display-message').css('color', 'red')
    $('#display-message').removeClass('hidden')
    $('.database').removeClass('hidden')
    $('.changePass').removeClass('hidden')
  })

  $('#upload-form').on('submit', uploadEvents.onUploadForm)
  $('#showAll').on('click', uploadEvents.onShowAll)
  $('#showAll').on('click', authEvents, () => {
    $('#display-message').addClass('hidden')
  })
  
})