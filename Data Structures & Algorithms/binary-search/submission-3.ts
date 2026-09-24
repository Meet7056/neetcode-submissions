class Solution {
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;

        // Keep searching as long as the search window is valid
        while (left <= right) {
            // Find the exact middle index
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                return mid; // Found it! Return the index immediately.
            } else if (nums[mid] < target) {
                left = mid + 1; // Target is in the right half, shift left boundary
            } else {
                right = mid - 1; // Target is in the left half, shift right boundary
            }
        }

        return -1; // Target was not found in the array
    }
}
