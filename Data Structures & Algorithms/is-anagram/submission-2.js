class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const newS = [...s].sort().join('');
        const newT = [...t].sort().join('');

        return newS === newT
    }
}
