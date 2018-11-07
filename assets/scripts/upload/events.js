'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onUploadForm = function (event) {
  event.preventDefault()
  const data = new FormData(event.target)
  api.uploadFile(data)
    .then(() => onShowAll(event))
    .catch(response => console.log(response))
}

const onShowAll = function (event) {
  event.preventDefault()
  api.showAll()
    .then(ui.showAllSuccess)
    .then(() => {
      $('.delete-upload').on('click', onDeleteUpload)
      $('.update-upload').on('submit', onUpdateUpload)
    })
    .catch(console.error)
}

const onDeleteUpload = function (event) {
  event.preventDefault()
  api.deleteUpload(event.target.id)
    .then(() => onShowAll(event))
    .catch(console.error)
}

const onUpdateUpload = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const correctedData = {upload: data}
  api.updateUpload(correctedData, event.target.id)
    .then(() => onShowAll(event))
    .catch(console.error)
}

module.exports = {
  onUploadForm,
  onShowAll
}
