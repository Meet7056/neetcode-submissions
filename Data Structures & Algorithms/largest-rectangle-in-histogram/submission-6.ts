class Solution {
    largestRectangleArea(heights: number[]): number {
        let maxArea = 0;
        const stack: number[] = []; // Stores indices of the heights

        for (let i = 0; i <= heights.length; i++) {
            // Use 0 height at the end to force flushing out all remaining bars in the stack
            const currentHeight = i === heights.length ? 0 : heights[i];

            // If current bar is lower than the bar at the stack top, calculate the area
            while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()!];
                
                // If stack is empty, the width extends all the way to index 0
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                
                maxArea = Math.max(maxArea, height * width);
            }
            
            stack.push(i);
        }

        return maxArea;
    }
}
