/**
 * if each char from "s" can be replaced to make "t", return true
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {

    //search backwards through string for mismatched pairs
    for (let i = s.length - 1; i > -1; i--) {
        console.log(i)
        if (s.indexOf(s[i], -1) !== t.indexOf(t[i], -1)) {
            return false;
        }
    }

    return true; 
};

isIsomorphic("13", "42")