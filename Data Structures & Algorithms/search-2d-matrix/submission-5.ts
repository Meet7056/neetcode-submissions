class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        for (let i = 0; i < matrix.length; i++) {
            const nums: number[] = matrix[i];

            let left: number = 0;
            let right: number = nums.length - 1;

            if (target > nums[right]) {
                continue;
            }


            while (left <= right) {
                let mid: number = Math.floor((left + right) / 2);
                
                if (nums[mid] === target) {
                    return true;
                } else if (target > nums[mid]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }   
            }
        }

        return false;
    }
}
