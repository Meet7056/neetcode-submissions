class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        // The minimum possible speed is 1 banana per hour.
        let left: number = 1; 
        
        // The maximum useful speed is the size of the largest pile.
        let right: number = Math.max(...piles); 
        
        let result: number = right;

        while (left <= right) {
            // Find the middle eating rate to test
            const mid: number = Math.floor(left + (right - left) / 2);
            
            // Calculate total hours needed with the current 'mid' rate
            let totalHours: number = 0;
            for (const pile of piles) {
                totalHours += Math.ceil(pile / mid);
            }

            // If Koko can finish all bananas within h hours, try to find a smaller speed
            if (totalHours <= h) {
                result = mid;       // Record the valid speed
                right = mid - 1;    // Search the left half for a smaller valid speed
            } else {
                // If it takes too long, Koko needs to eat faster
                left = mid + 1;     // Search the right half
            }
        }

        return result;
    }
}
