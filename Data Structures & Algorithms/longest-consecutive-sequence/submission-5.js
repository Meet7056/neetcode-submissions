class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // 1. Put all numbers in a Set for instant O(1) lookups
        const numSet = new Set(nums);
        let longestStreak = 0;

        for (const num of numSet) {
            // 2. Check if 'num' is the absolute START of a sequence
            // If the set contains (num - 1), then 'num' is NOT the start. Skip it!
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentStreak = 1;

                // 3. Count how far this sequence stretches to the right
                while (numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }

                // 4. Update our max record if this streak is longer
                if (currentStreak > longestStreak) {
                    longestStreak = currentStreak;
                }
            }
        }

        return longestStreak;
    }
}
