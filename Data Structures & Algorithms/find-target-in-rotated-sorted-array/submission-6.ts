class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left: number = 0;
        let right: number = nums.length - 1;

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);

            console.log({mid})

            if (nums[mid] === target) {
                return mid;
            }

            const isLeftSorted: boolean = nums[left] <= nums[mid];
            if (isLeftSorted) {
                if (nums[left] <= target && target <= nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (nums[mid] <= target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1;
    }
}
