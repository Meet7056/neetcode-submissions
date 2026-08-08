class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // A string with an odd number of brackets can never be valid
        if (s.length % 2 !== 0) return false;

        const stack = [];
        // Map closing brackets to their matching opening brackets for clean lookups
        const bracketMap = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            // If it's a closing bracket
            if (bracketMap[char] !== undefined) {
                // Get the last opened bracket from the top of the stack
                const topElement = stack.pop();
                
                // If it doesn't match the required opening bracket, it's invalid
                if (bracketMap[char] !== topElement) {
                    return false;
                }
            } else {
                // If it's an opening bracket, push it onto the stack
                stack.push(char);
            }
        }

        // If the stack is empty, all brackets were matched correctly
        return stack.length === 0;
    }
}
