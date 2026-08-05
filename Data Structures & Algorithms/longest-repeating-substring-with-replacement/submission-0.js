class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxLength = 0;
        let left = 0;
        let maxFrequency = 0;
        const countMap = {}; // Tracks character frequencies in the current window

        // 'right' pointer expands the sliding window character by character
        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            
            // Add current character to the frequency map
            countMap[char] = (countMap[char] || 0) + 1;
            
            // Update the highest frequency of any single letter seen in the current window
            if (countMap[char] > maxFrequency) {
                maxFrequency = countMap[char];
            }

            // Current window size = right - left + 1
            // Mismatched characters = window size - maxFrequency
            // If mismatches exceed budget 'k', shrink the window from the left
            while ((right - left + 1) - maxFrequency > k) {
                const leftChar = s[left];
                countMap[leftChar]--; // Remove the left character from our count
                left++; // Move the left boundary forward
            }

            // Update the maximum length recorded so far
            const currentWindowSize = right - left + 1;
            if (currentWindowSize > maxLength) {
                maxLength = currentWindowSize;
            }
        }

        return maxLength;
    }
}
