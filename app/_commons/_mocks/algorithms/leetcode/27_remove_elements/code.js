export const removeElement = function(nums, val) {
    let k = 0;
        for(let x = 0; x < nums.length; x++){
            if(nums[x] !== val) {
                nums[k] = nums[x];
                k ++;
            }
        }
    return k;
};