const log = console.log.bind(console)

var imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}


var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}

var randomBetween = (start, end) => {
    var n  = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}

var es = sel => {
    return document.querySelectorAll(sel)
}
var e = sel => {
    console.log(sel)
    return document.querySelector(sel)
}