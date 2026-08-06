class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    sortStr(str) {
        return str.split("").sort().join("");
    }
    checkInclusion(s1, s2) {
        const sortedS1 = this.sortStr(s1);

        for (let i = 0; i < s2.length; i++) {
            const subString = s2.slice(i, i+(s1.length));
            const sortedS2 = this.sortStr(subString);

            if (sortedS1 === sortedS2){
                return true;
            }
        }

        return false;
    }
}
