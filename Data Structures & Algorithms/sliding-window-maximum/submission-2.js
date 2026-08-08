class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const deque = []; // Stores indices of elements

        for (let right = 0; right < nums.length; right++) {
            // 1. Remove indices of elements that are smaller than the current element
            // because they can never be the maximum in this or any future window
            while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[right]) {
                deque.pop();
            }

            // 2. Add current element's index to the back of the deque
            deque.push(right);

            // 3. Remove the front index if it has fallen out of the current window boundary
            if (deque[0] <= right - k) {
                deque.shift();
            }

            // 4. The window must have at least 'k' elements before we start recording maximums
            if (right >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}
