class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const arr = [];
        let result = false;
        for (const num of nums) {
            if (arr.includes(num)) {
                result = true
                break;
            }else {
                arr.push(num);
                continue;
            }
        }

        return result;
    }
}
