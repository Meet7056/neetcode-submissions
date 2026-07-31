class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n);
        
        // 1. Calculate prefix products (products of all elements to the left)
        let leftProduct = 1;
        for (let i = 0; i < n; i++) {
            result[i] = leftProduct;
            leftProduct *= nums[i];
        }
        
        // 2. Multiply by suffix products (products of all elements to the right)
        let rightProduct = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        
        return result;
    }
}
