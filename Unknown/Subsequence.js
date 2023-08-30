/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//ex: s = "ace" t = "abcde" return true b/c "abcde" - bd = "ace"
//ex: s = "aec" t = "abcde" return false b/c there is no way to remove letters to reach "aec"

function isSubsequence(s, t) {
    let newStr = "";
  
    // Find characters in t that match characters in s
    let sIndex = 0;
    for (let i = 0; i < t.length && sIndex < s.length; i++) {
      if (t[i] === s[sIndex]) {
        newStr += t[i];
        sIndex++;
      }
    }

    console.log(t)
    console.log(s)
    console.log(newStr)
  
    // Check if newStr is equal to s
    if (newStr === s) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  }
  

isSubsequence("ab", "baab")