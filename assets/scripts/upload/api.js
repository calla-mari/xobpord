'use strict'

const config = require('../config.js')
const store = require('../store.js')

const uploadFile = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/uploads',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    processData: false, // Important!
    contentType: false,
    data: data
  })
}

const showAll = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/uploads',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteUpload = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/uploads/${id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  uploadFile,
  deleteUpload,
  showAll
}
