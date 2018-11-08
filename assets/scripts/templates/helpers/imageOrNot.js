const mime = require('mime-types')

const imageOrNot = function (url) {
    const type = mime.lookup(url)
    if (type.includes('image')) {
        return `<a class="portfolio-box portfolio-link portfolio-hover" target="_blank" href="${url}">
                    <div class="image">
                        <img class="img-fluid" src="${url}" alt="">
                    </div>
                </a>`
    } else {
        return `<a class="portfolio-box portfolio-link portfolio-hover" target="_blank" href="${url}">
                    <div class="image">
                        <img class="img-fluid" src="public/xobpord.png" alt="">
                    </div>
                </a>`
    }
}

module.exports = imageOrNot
