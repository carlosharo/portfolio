
/**
 * Converts a Roman numeral to an integer.
 * @param {string} s - The Roman numeral to convert.
 * @returns {number} - The converted integer.
 */
export const romanToInteger = function(s) {
    const oneChar = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    const twoChars = { 'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900 }
    let result = 0;
    for(let x = 0; x < s.length; x++ ){
        const twoNums = twoChars[s.charAt(x)+s.charAt(x+1)];
        if(twoNums > 0){
            result = result + twoNums;
            x++;
        }else{
            result = result + oneChar[s.charAt(x)];
        }
    }
    return result;
};