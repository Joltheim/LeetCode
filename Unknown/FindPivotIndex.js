/**
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
    let leftValue = 0;
    let sumAll = 0;
    let pivotIndex = -1;

    //calculate value of all numbers in array
    for (let i = 0; i < nums.length; i++) {
        sumAll += nums[i]
    }

   //compare sum of left to sum of right numbers from index
    for (let i = 0; i < nums.length; i++) {
        if (leftValue == sumAll - leftValue - nums[i]) {
            pivotIndex = i;
            break;
        }
        leftValue += nums[i]
    }

    console.log(pivotIndex)
    return pivotIndex
};

pivotIndex([1,7,3,6,5,6])