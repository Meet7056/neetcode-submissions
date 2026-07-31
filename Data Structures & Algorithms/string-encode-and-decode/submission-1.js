class Solution {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (const s of strs) {
            result += s.length + "#" + s;
        }
        return result;
    }

    /**
     * Decodes a single string back to a list of strings.
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        
        while (i < str.length) {
            // Find where the delimiter '#' is
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            
            // Extract the length of the next string
            const length = parseInt(str.substring(i, j), 10);
            
            // Extract the string based on that length
            i = j + 1; // Move past '#'
            result.push(str.substring(i, i + length));
            
            // Move pointer to the start of the next item
            i += length;
        }
        
        return result;
    }
}
