class MinStack {
    arr = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.arr.push(val);

        return null;
    }

    /**
     * @return {void}
     */
    pop() {
        return this.arr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.arr);
    }
}
