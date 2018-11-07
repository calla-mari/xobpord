const correctUser = function (id, userID, owner) {
    const bool = userID.localeCompare(owner) === 0
    if (bool) {
        return `
        <button id="${id}" class="btn btn-danger delete-upload">Delete</button>
        <button id="${id}" class="btn btn-primary update-upload">Update</button>`
    } else {
        return ''
    }
}

module.exports = correctUser