interface Pairs { timestamp: number; value: string };

class TimeMap {
    // Declaring the keyStore type explicitly for TypeScript
    private keyStore: Map<string, Array<Pairs>>;

    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key)!.push({ timestamp, value });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        // If the key doesn't exist at all, return empty string
        if (!this.keyStore.has(key)) {
            return "";
        }

        const pairs = this.keyStore.get(key)!;
        let left: number = 0;
        let right: number = pairs.length - 1;
        let res: string = "";

        // Fix 1: Changed 'if' to 'while' to continuously look through the array
        while (left <= right) {
            const mid: number = Math.floor(left + (right - left) / 2);
            
            // Fix 2: Check if mid timestamp is less than or equal to the target
            if (pairs[mid].timestamp <= timestamp) {
                res = pairs[mid].value; // This is a candidate! Save it.
                left = mid + 1;         // Look to the right for an even closer/larger timestamp
            } else {
                right = mid - 1;        // This timestamp is too big, look to the left side
            }
        }

        return res;
    }
}
