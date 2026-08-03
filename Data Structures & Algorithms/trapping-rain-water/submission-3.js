class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    maxNum (arr) {
        return Math.max(...arr);
    }
    trap(height) {
        let maxLimit = 0; // 9
        for (let i = 0; i < height.length; i++) {
            const val = height[i]; // 2

            if (i === 0 || i === height.length - 1) {
                continue;
            }

            const maxL = this.maxNum(height.slice(0, i)); // 4
            const maxR = this.maxNum(height.slice(i + 1, height.length)); // 5

            if (maxL < val || maxR < val){
                continue;
            }

            const result = Math.min(maxL, maxR) - val;

            maxLimit += result;
        }

        return maxLimit;
    }
}
