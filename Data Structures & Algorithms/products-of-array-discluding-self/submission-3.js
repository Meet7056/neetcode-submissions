class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    countProduct(arr) {
        return arr.reduce((a, b) => a * b, 1);
    }
    productExceptSelf(nums) {
        const arr = [];
        for(let i = 0; i < nums.length; i++){
            const newNum = this.countProduct(nums.filter((n, index) => i !== index));
            arr.push(newNum);
        }
        return arr;
    }
}
