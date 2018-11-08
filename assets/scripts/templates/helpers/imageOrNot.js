const mime = require('mime-types')

const imageOrNot = function (url) {
    const type = mime.lookup(url)
    if (type.includes('image')) {
        return `<a class="image portfolio-box portfolio-link portfolio-hover" target="_blank" href="${url}">
                    <img class="img-fluid img" src="${url}" alt="">
                </a>`
    } else {
        return `<a class="image portfolio-box portfolio-link portfolio-hover" target="_blank" href="${url}">
                    <img class="img-fluid img" src="public/xobpord.png" alt="">
                </a>`
    }
}

module.exports = imageOrNot
