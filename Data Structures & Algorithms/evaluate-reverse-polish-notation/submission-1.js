class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];

            if (token === '+') {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a + b);
            } else if (token === '-') {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a - b);
            } else if (token === '*') {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a * b);
            } else if (token === '/') {
                const b = stack.pop();
                const a = stack.pop();
                // Math.trunc removes decimals, correctly truncating toward zero
                stack.push(Math.trunc(a / b));
            } else {
                // It's a number string, convert it and push it
                stack.push(Number(token));
            }
        }

        return stack[0];
    }
}
