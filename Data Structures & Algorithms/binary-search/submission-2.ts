class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    calculateCenter (nums: number[]): number {
        return nums[Math.round(nums.length / 2)];
    }

    search(nums: number[], target: number): number {
        const num = this.calculateCenter(nums);
        console.log({num})
        return nums.indexOf(target);
    }
}
