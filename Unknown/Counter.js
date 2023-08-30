/**
 * @param {number} n
 * @return {Function} counter
 */

let createCounter = (n) => {
    let count = n
    return () => {
        return count++
    }
};

createCounter(10)
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// let createCounter = (n, arr) => {
//     let newArray = []
//     for(let i = 0; i < arr.length; i++) {
//         newArray.push(n)
//         n++
//     }
//     return newArray
// };