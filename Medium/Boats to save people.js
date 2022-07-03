var numRescueBoats = function(P, L) {

    let weights = new Uint16Array(L), pairs = 0
    for (let wt of P) weights[wt]++                          // Make a frequency map of people's weights
    for (let i = 0, j = L; i <= j;) {                        // Initiate the sliding window
        while (!weights[j] && j > i) j--                     // Until you find a non-zero, slide j back
        while (!weights[i] && i < j) i++                     // Until you find a non-zero, slide i forward
        let x = weights[i], y = weights[j]
        if (i + j > L) j--                                   // If they're not a match, move on to the next j
        else if (i === j) pairs += ~~(x / 2), j = 0          // If they're the same, add half and force a break
        else if (x <= y) weights[j] -= x, pairs += x, i++    // Otherwise, take the lower amount and remove it
        else weights[i] -= y, pairs += y, j--                //    from the higher amount before moving onward
    }

    return P.length - pairs                                  // Each pair means one less trip than the max

};
