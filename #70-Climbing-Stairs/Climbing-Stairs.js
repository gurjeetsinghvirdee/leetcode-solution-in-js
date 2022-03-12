/**
 * @param {number} n
 * @return {number}
 */
 const climbStairs = function(n) {
    
    var cl = Array.from(new Array(n + 1));
    cl[1] = 1;
    cl[2] = 2;

    for (let i = 3; i <= n; i++) {
        cl[i] = cl[i - 1] + cl[i - 2];
    }
    
    return cl[n];
};