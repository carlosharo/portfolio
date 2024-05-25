/**
 * Calculates the length of the last word in a given string.
 *
 * @param {string} s - The input string.
 * @returns {number} The length of the last word.
 */
export const lengthOfLastWord = function(s) {    
    return s.trim().replace(/\s+/g, ' ').split(' ').pop().length;
};