'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const config = require('./config.js')

$(() => {
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

  $('#upload-form').on('submit', function (event) {
    event.preventDefault()
    const data = new FormData(event.target)
    $.ajax({
      method: 'POST',
      url: config.apiUrl + '/uploads',
      processData: false, // Important!
      contentType: false,
      data: data
    })
      .then((response) => {
        console.log(response)
        $('#new-image').attr('src', response.upload.url)
      })
      .catch((response) => {
        console.log(response)
      })
  })
})
