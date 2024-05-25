
/**
 * Rotates the elements of an array to the right by a given number of steps.
 * @param {number[]} nums - The array of numbers to be rotated.
 * @param {number} k - The number of steps to rotate the array.
 */
export const rotateArray = function (nums, k) {
    const copy = [...nums];
    for (let x = 0; x < nums.length; x++) {
        nums[(x + k) % nums.length] = copy[x];
    }
};