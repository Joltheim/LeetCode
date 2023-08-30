// Prompt:
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order. 
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

// Code:
/**
 * @param {number[]} digits
 * @return {number[]}
 */

//Original Attempt
//Has a logic bug with carry over values
var plusOne = function(digits) {
    if(digits[digits.length-1] == 9) {
        for(let i = digits.length - 1; i >= 0 ; i--) {
            if(digits[i] >= 9) {
                digits[i] = 0
                if(i - 1 < 0) {
                    digits.unshift(1)
                } else {
                    digits[i - 1] += 1
                }
                console.log(digits)
            }
        }        
    } else {
        digits[digits.length-1] += 1
    }
    console.log(digits)
    return digits
}
// plusOne([8,9,9,9])

//Attempt Two
//Note the approach of directly converting array to a number, adding 1, and converting back to an array
//does not work well for large numbers
const plusTwo = (arr) => {
    let newNum = parseInt(arr.join('')) + 1
    console.log(newNum)
    let resultArray = newNum.toString().split('')
    console.log(resultArray)
    return resultArray
}
// plusTwo([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])

//Attempt Three
const plusOne = (arr) => {
        for(let i = arr.length - 1; i >= 0; i--){
            //add 1 & return if no carry over needed
            if(arr[i]<9){
                arr[i]++;
                return arr;
            }
            //if [i] == 9, set it to 0, next value will be checked by first conditional
            arr[i] = 0;
        }
        //if final value is a 9 (ex: [9,9]), add a 1 to the front (ex: becomes [1,0,0])
        arr.unshift(1);
        return arr;
}
plusThree([8, 9, 9, 9])