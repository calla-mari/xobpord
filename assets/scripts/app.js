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
  $('#sign-out-form').on('click', authEvents.onSignOut)
  $('.newAccount').on('click', authEvents, () => {
    $('#signInBox').addClass('hidden')
    $('#signUpBox').removeClass('hidden')
  })
  $('.existingAcct').on('click', authEvents, () => {
    $('#signInBox').removeClass('hidden')
    $('#signUpBox').addClass('hidden')
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
