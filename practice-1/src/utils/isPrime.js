export default function (n) {
    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true;
    } else if (n % 2 === 0) {
        return false;
    } else {
        let max = Math.floor(Math.sqrt(n));
        for (let i = 3; i <= max; i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}
