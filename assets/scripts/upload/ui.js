'use strict'

const store = require('../store.js')
const uploadTableTemplate = require('../templates/upload-table.handlebars')

const showAllSuccess = function (data) {
  $('.uploads-table').html('')
  const templateData = data
  templateData.uploads.map(upload => upload.currentUser = store.user) 
  let showUploadsHtml = uploadTableTemplate({ uploads: templateData.uploads })
  $('.uploads-table').append(showUploadsHtml)
}

module.exports = {
  showAllSuccess
}
