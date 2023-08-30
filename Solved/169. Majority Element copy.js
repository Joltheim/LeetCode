// Prompt: 
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Code:

const majorityElement = (nums) => {
   let candidate = null
   let count = 0

   //determine which item shows up most
   for (const num of nums) {
        if(count === 0) {
            candidate = num
            count++
        } else if (num === candidate) {
            count++
        } else {
            count--
        }
   }

   //get a count of the num of times most occurring item appears
   count = 0
   for (const num of nums) {
        if(num === candidate) {
            count++
        }
   }
   console.log('count = ' + count)
   console.log('Leading Candidate = ' + candidate)

   //check if count reached a majority (count > n / 2)
   let majorityThreshold = (nums.length / 2)
   console.log('majorityThreshold = ' + majorityThreshold)
   if (count > majorityThreshold) {
    console.log(candidate)
    return candidate
   } else {
    console.log("no majority reached")
    return "no majority reached"
   }
}

majorityElement(['James', 'John', 'James', 'John', 'James'])