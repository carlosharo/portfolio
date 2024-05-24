export const lengthOfLastWord = function(s) {    
    return s.trim().replace(/\s+/g, ' ').split(' ').pop().length;
};