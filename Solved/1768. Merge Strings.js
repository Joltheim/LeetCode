/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 
var mergeAlternately = function(word1, word2) {
    let newArr = []

    let longestStr = 0
    if (word1.length > word2.length) {
        longestStr = word1.length
    } else {
        longestStr = word2.length
    }

    for(let i = 0; i < longestStr; i++) {
        if(word1[i] != undefined) {
            newArr.push(word1[i])
        }
        if(word2[i] != undefined) {
            newArr.push(word2[i])
        }
    }
    let joinedStr = newArr.join('')
    return(joinedStr)
};

mergeAlternately('abc','pqr')

//Passed all tests 8/20/23