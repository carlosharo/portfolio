import {rotateArray} from './code';
export const rotate_array = {
    title: 'Leetcode - 189.Rotate Array',
    href: 'https://leetcode.com/problems/rotate-array/description/',
    subtitle: 'Description:',
    description: `Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.`,
    example: {
        title: 'Example 1:',
        description: `Input: nums = [1,2,3,4,5,6,7], k = 3
        Output: [5,6,7,1,2,3,4]
        Explanation:
        rotate 1 steps to the right: [7,1,2,3,4,5,6]
        rotate 2 steps to the right: [6,7,1,2,3,4,5]
        rotate 3 steps to the right: [5,6,7,1,2,3,4]`,
        code: rotateArray,
    },
    media: {
        href: './algorithms/leetcode/189.rotate_array.png',
        alt: 'Leetcode - 27.Remove Element',
    }
};