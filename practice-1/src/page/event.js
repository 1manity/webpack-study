import NumberTimer from "../utils/number"
import appendNumber from "./appendNumber"

var isStart = true
var n = new NumberTimer()

n.onNumberCreated = function(n, isPrime) {
    // console.log(n, isPrime);
    appendNumber(n, isPrime)
};
n.start()

window.onclick = function () {
    if (isStart) {
        n.stop()
        isStart = false
    } else {
        n.start()
        isStart = true
    }
}
