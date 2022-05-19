/**
 * @param {number} n
 * @return {boolean}
 */

const isHappy = function(n, happy = {}) {

    if (n !== 1) {
        if (happy[n]) {
            return false
        }

        happy[n] = 1
        const i = n.toString().split("");
        const j = i.map(x => parseInt(x))
        const sum = j.reduce((total, x) => total + x**2, 0)

        return isHappy(sum, happy)
        
    }
    return true
};