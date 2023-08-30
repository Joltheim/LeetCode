/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

let gcdOfStrings = (str1, str2) => {
    let newStr = []
    //check if str1 is 'divisible by str2, if not return empty str
    if (!str1.includes(str2)) {
        return ''
    } else {
        //iterate over str1 until first char (newStr[0]) is repeated
        for(let i = 0; i < str2.length; i++) {
            if(str1[i] == newStr[0]) {
                return newStr.join('')
            } else {
            //if no repeat is found, keep pushing values into newStr from str2
                newStr.push(str2[i])
            }
        }
    }
    return newStr.join('')
};

gcdOfStrings('ABCABC', 'ABC')
gcdOfStrings("ABABAB", "AB")

//Completed 8/20/23

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""