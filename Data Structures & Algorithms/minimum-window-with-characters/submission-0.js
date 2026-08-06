class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (!s || !t || s.length < t.length) {
            return "";
        }

        // Step 1: Create a map to track the required characters and their counts
        const targetMap = {};
        for (let i = 0; i < t.length; i++) {
            const char = t[i];
            targetMap[char] = (targetMap[char] || 0) + 1;
        }

        // Unique characters in t that must be fully satisfied
        const requiredMatches = Object.keys(targetMap).length;
        
        // Tracks how many unique characters are currently satisfied inside the window
        let currentMatches = 0;

        const windowMap = {};
        let left = 0;

        // Variables to record the best window's length and boundaries
        let minLen = Infinity;
        let bestLeft = 0;
        let bestRight = 0;

        // Step 2: Expand the window using the 'right' pointer
        for (let right = 0; right < s.length; right++) {
            const charRight = s[right];
            windowMap[charRight] = (windowMap[charRight] || 0) + 1;

            // If the character is needed and its count matches the requirement, check it off
            if (targetMap[charRight] !== undefined && windowMap[charRight] === targetMap[charRight]) {
                currentMatches++;
            }

            // Step 3: Shrink the window from the left while it remains valid
            while (currentMatches === requiredMatches) {
                const currentWindowLen = right - left + 1;

                // Save the boundaries if this is the smallest valid window found so far
                if (currentWindowLen < minLen) {
                    minLen = currentWindowLen;
                    bestLeft = left;
                    bestRight = right;
                }

                const charLeft = s[left];
                windowMap[charLeft]--;

                // If removing this character breaks the required count, we lose a match
                if (targetMap[charLeft] !== undefined && windowMap[charLeft] < targetMap[charLeft]) {
                    currentMatches--;
                }

                left++; // Shrink the window
            }
        }

        // Step 4: Return the smallest substring, or an empty string if no window was found
        return minLen === Infinity ? "" : s.slice(bestLeft, bestRight + 1);
    }
}
