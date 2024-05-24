/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

export const rotateArray = function (nums, k) {
    const copy = [...nums];
    for (let x = 0; x < nums.length; x++) {
        nums[(x + k) % nums.length] = copy[x];
    }
};