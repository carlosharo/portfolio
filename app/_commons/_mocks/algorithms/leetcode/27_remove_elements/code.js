
/**
 * Removes all occurrences of a specified value from an array.
 *
 * @param {number[]} nums - The array from which to remove elements.
 * @param {number} val - The value to be removed from the array.
 * @returns {number} - The new length of the array after removing the elements.
 */
export const removeElement = function(nums, val) {
    let newLength = 0;
        for(let x = 0; x < nums.length; x++){
            if(nums[x] !== val) {
                nums[k] = nums[x];
                newLength ++;
            }
        }
    return k;
};