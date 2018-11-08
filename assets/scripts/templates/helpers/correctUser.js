// const correctUser = function (id, userID, owner) {
//     const bool = userID.localeCompare(owner) === 0
//     if (bool) {
//         return `
//         <button id="${id}" class="btn btn-danger delete-upload">Delete</button>
//         <form id="${id}" class="update-upload">
//             <fieldset>
//                 <input type="text" name="tag" placeholder="Tag">
//                 <input type="submit" class="btn btn-primary" value="Update"></input>
//             </fieldset>
//         </form>`
//     } else {
//         return ''
//     }
// }

// module.exports = correctUser


const correctUser = function (id, userID, owner) {
    const bool = userID.localeCompare(owner) === 0
    if (bool) {
        return `
        <form id="${id}" class="update-upload">
            <fieldset>
                <input type="text" name="tag" placeholder="Tag">
                <input type="submit" class="btn btn-sm btn-defualt updateBtn" value="Update"></input>
                <a id="${id}" class="btn delete-upload material-icons" data-toggle="tooltip" style="color:rgb(90, 190, 230)">&#xE872;</a>
            </fieldset>
        </form>`
    } else {
        return ''
    }
}

module.exports = correctUser

{/* <a href="#editDiveModal" class="edit crudIcon" id="edit-{{divelog.id}}"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
<a class="delete crudIcon btn" id="delete-{{divelog.id}}" data-id="{{divelog.id}}"><i class="material-icons" data-toggle="tooltip" title="Delete" style="color:rgb(28, 173, 228);">&#xE872;</i></a> */}