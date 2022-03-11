/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function (dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;
    
    if (divisor === 0 || (dividend === MIN && divisor === -1)) {
        return MAX;
    }
    if (divisor === dividend) {
        return 1;
    }
    
    const sign = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1;
    
    let quotient = 0;
    
    let absoluteDividend = Math.abs(dividend);
    let absoluteDivisor = Math.abs(divisor);
    
    while (absoluteDividend >= absoluteDivisor) {
        
        let shift = 0;
        let shiftedDivisor = absoluteDivisor;
        while (absoluteDividend >= shiftedDivisor) {
            shift++;
            shiftedDivisor = absoluteDivisor << shift;
            
            if (shiftedDivisor < 0) {
                break;
            }
        }
        
        quotient += (1 << (shift - 1));
        
        absoluteDividend -= absoluteDivisor << (shift - 1);
    }
    return sign === -1 ? -quotient : quotient;
};