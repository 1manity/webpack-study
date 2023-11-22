import randomColor, {getRandom} from "../utils/randomColor";

var divContainer = document.querySelector('#divContainer')
var divCenter = document.querySelector('#divCenter')

export default function (n, isPrime) {
    var span = document.createElement('span')
    if (isPrime) {
        var color = randomColor()
        span.style.color = color
        createCenterPrimeNumber(n, color)
    }
    createCenterNumber(n)
    span.innerText = n
    divContainer.appendChild(span)
}

function createCenterNumber(n) {
    divCenter.innerText = n
}
function createCenterPrimeNumber(n, color) {
    var div = document.createElement('div')
    div.className = 'center'
    div.style.color = color
    div.innerText = n
    document.body.appendChild(div)

    getComputedStyle(div).left

    div.style.transform = `translate(${getRandom(-200,200)}px, ${getRandom(-200,200)}px)`
    div.style.opacity = 0

}
