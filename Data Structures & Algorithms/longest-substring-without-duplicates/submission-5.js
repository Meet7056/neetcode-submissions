class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let left = 0;
        const charSet = new Set();

        // 'right' expands the sliding window character by character
        for (let right = 0; right < s.length; right++) {
            
            // If we find a duplicate, shrink the window from the left
            while (charSet.has(s[right])) {
                charSet.delete(s[left]);
                left++;
            }

            // Add the current character to our window
            charSet.add(s[right]);

            // Calculate the current window size and update maxLength
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
        }

        return maxLength;
    }
}
