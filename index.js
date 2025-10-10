var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return nums;
    }
    
    let k = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }
    
    // Adjust the length of the array to k + 1
    nums.length = k + 1;
    return nums;
};
console.log(removeDuplicates([1,1,2,0,1]))