const correctUser = function (id, userID, owner) {
    const bool = userID.localeCompare(owner) === 0
    if (bool) {
        return `
        <button id="${id}" class="btn btn-danger delete-upload">Delete</button>
        <form id="${id}" class="update-upload">
            <fieldset>
                <input type="text" name="tag" placeholder="Tag">
                <input type="submit" class="btn btn-primary" value="Update"></input>
            </fieldset>
        </form>`
    } else {
        return ''
    }
}

module.exports = correctUser