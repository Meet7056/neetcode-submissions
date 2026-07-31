class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram(s, t) {
        const matchedArr = [];

        for (const element of t) {
            const newS = [...s].sort().join("");
            const newElement = [...element].sort().join("");

            if (newS === newElement) {
                matchedArr.push(element);
            }
        }

        return matchedArr;
    }
    groupAnagrams(strs) {
        const newArr = [];
        const selectedElements = [];
        for (let i = 0; i < strs.length; i++) {
            const arrToCompare = strs.filter(item => !selectedElements.includes(item));
            const matchedArr = this.isAnagram(strs[i], arrToCompare);
            if (matchedArr.length === 0) {
                continue;
            }
            selectedElements.push(...matchedArr);
            newArr.push(matchedArr);
        }
        return [...new Set(newArr)];
    }
}
