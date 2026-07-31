class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            // Create a sorted string to use as the unique key
            const sortedKey = [...str].sort().join('');
            
            // If the key doesn't exist, initialize it with an empty array
            if (!map.has(sortedKey)) {
                map.set(sortedKey, []);
            }
            
            // Push the original string into its matching anagram group
            map.get(sortedKey).push(str);
        }

        // Return all grouped arrays
        return Array.from(map.values());
    }
}
