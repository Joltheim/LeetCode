/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let newArray = [];
    let newNumber = 0;

    for (i = 0; i < nums.length; i++) {
        newNumber += nums[i]
        newArray.push(newNumber)
    }
    
    return newArray
};