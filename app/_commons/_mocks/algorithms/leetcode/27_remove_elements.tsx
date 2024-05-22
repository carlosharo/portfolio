
export const remove_elements = {
    title: 'Leetcode - 27.Remove Element',
    href: 'https://leetcode.com/problems/remove-element/description',
    description: `Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
    The order of the elements may be changed.
    Then return the number of elements in nums which are not equal to val.`,
    example: {
        title: 'Example:',
        description: `Input: nums = [3,2,2,3], val = 3
        Output: 2, nums = [2,2,_,_]
        Explanation: Your function should return k = 2, with the first two elements of nums being 2.`,
        code: `
        var removeElement = function(nums, val) {
            let k = 0;
            for(let x = 0; x < nums.length; x++){
                if(nums[x] !== val) {
                    nums[k] = nums[x];
                    k ++;
                }
            }
            return k;
        };`,
    },
    media: {
        href: './algorithms/leetcode/27.remove_elements.png',
        alt: 'Leetcode - 27.Remove Element',
    }
};