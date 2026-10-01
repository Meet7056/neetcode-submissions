class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left: number = 0; 
        let right: number = nums.length - 1; 

        // If the array is not rotated at all (or rotated n times)
        if (nums[left] <= nums[right]) {
            return nums[left];
        }

        while (left < right) {
            let mid: number = Math.floor(left + (right - left) / 2);

            // If mid is greater than the rightmost element, the minimum is in the right half
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                // Otherwise, mid could be the minimum, so we keep it in our search space
                right = mid;
            }
        }

        // When left === right, it will point to the minimum element
        return nums[left];
    }
}
