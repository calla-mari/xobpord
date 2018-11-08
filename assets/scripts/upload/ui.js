'use strict'

const store = require('../store.js')
const uploadTableTemplate = require('../templates/upload-table.handlebars')

// const showAllSuccess = function (data) {
//   $('.display-uploads').removeClass('hidden')
//   $('.uploads-table').html('')
//   const templateData = data
//   templateData.uploads.map(upload => upload.currentUser = store.user) 
//   const showUploadsHtml = uploadTableTemplate({ uploads: templateData.uploads })
//   $('.uploads-table').append(showUploadsHtml)
//   $('#upload-form').trigger('reset')
// }

const showAllSuccess = function (data) {
  $('.display-uploads').removeClass('hidden')
  $('.uploads-table').html('')
  const templateData = data
  templateData.uploads.map(upload => upload.currentUser = store.user) 
  const showUploadsHtml = uploadTableTemplate({ uploads: templateData.uploads })
  $('.uploads-table').append(showUploadsHtml)
  $('#upload-form').trigger('reset')
}


const failure = function () {
  $('#display-message').html('Something went wrong, please try again')
  $('#display-message').css('color', 'red')
  $('#display-message').removeClass('hidden')
  $('#upload-form').trigger('reset')
}

module.exports = {
  showAllSuccess,
  failure
}
