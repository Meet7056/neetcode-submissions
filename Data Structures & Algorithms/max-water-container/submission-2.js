class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxLimit = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const distance = right - left;
            const minVal = Math.min(heights[left], heights[right]);
            const result = distance * minVal;

            // Update maxLimit if current container holds more water
            if (maxLimit < result) {
                maxLimit = result;
            }

            // Move the pointer pointing to the shorter bar
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxLimit;
    }
}
