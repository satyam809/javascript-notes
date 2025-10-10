1) https://leetcode.com/problems/valid-anagram/
var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let obj = {}
    for(let i = 0; i < s.length; i++){
        if(obj[s[i]]){
            obj[s[i]]++;
        }else{
            obj[s[i]] = 1;
        }
    }
    for(let i = 0; i < t.length; i++){
        if(!obj[t[i]]){
            return false;
        }
        obj[t[i]]--;
        if(obj[t[i]] == 0){
            delete obj[t[i]];
        }
    }
    if(Object.keys(obj).length == 0){
        return true
    }
    return false;
}

2) https://leetcode.com/problems/intersection-of-two-arrays-ii/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let num1= nums1.sort((a, b) => a -b);
    let num2 = nums2.sort((a, b) => a -b);
    let i = 0;
    let j = 0;
    let result = [];
    while( i < num1.length && j < num2.length){
        if(num1[i] == num2[j]){
            result.push(num1[i]);
            i++;
            j++;
        }else if(num1[i] > num2[j]){
            j++
        }else{
            i++;
        }
    }
    return result;
};

3) https://leetcode.com/problems/majority-element/
var majorityElement = function(nums) {
  let obj = {};
  for(let i = 0; i < nums.length; i++){
    if(obj[nums[i]]){
      obj[nums[i]]++;
    }else{
     obj[nums[i]] = 1;
    }
    if(obj[nums[i]] > Math.floor(nums.length/2)){
      return nums[i];
    }
  }
   
};