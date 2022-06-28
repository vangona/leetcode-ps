class MinStack {
    constructor() {
        this.stack = [];
        this.minHistory = [];
        this.length = 0;
    }

    push(val) {
        this.stack.push(val);
        let min = this.minHistory[this.length - 1];
        this.minHistory.push(min === undefined ? val : Math.min(min, val));
        this.length++;
    }

    pop() {
        this.stack.pop();
        this.minHistory.pop();
        this.length--;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minHistory[this.length - 1];
    }
};