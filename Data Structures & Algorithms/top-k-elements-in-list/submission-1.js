class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    numCountsInArr (arr, num) {
        return arr.filter((item) => item === num).length;
    }

    topKFrequent(nums, k) {
        const usedInt = [];
        const numsWithCount = new Map();

        for (const num of nums) {
            if (usedInt.includes(num)) {
                continue;
            }

            const lengthOfNum = this.numCountsInArr(nums, num);

            numsWithCount.set(num, lengthOfNum);

            usedInt.push(num);
        }

        const newArr = [...numsWithCount.entries()].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, k);
        
        return newArr;
    }
}
