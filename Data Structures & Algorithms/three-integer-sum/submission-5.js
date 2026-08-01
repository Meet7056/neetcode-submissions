class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const arr = [];
        // Step 1: Sort the array to handle duplicates easily
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            // Step 2: Skip duplicate values for the first element
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            // Step 3: Two-pointer approach for the remaining two elements
            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    arr.push([nums[i], nums[left], nums[right]]);
                    
                    // Move pointers past duplicate values to avoid duplicate triplets
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++; // Sum is too small, move left pointer right to increase sum
                } else {
                    right--; // Sum is too large, move right pointer left to decrease sum
                }
            }
        }

        return arr;
    }
}
