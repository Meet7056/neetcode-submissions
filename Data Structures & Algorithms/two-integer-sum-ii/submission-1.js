class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            const val = numbers[i]; // 1
            let nextInd = i+1;
            
            while(nextInd < numbers.length){
                const nextVal = numbers[nextInd];
                const result = nextVal + val;
                if (result === target) {
                    return [i+1, nextInd+1];
                }
                nextInd++
            }
        }
        return []
    }
}
