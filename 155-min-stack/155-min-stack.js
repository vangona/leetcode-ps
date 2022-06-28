class MinStack {
    constructor() {
        this.stack = [];
        this.minHistory = [];
        this.length = 0;
    }

    push(val) {
        this.stack.push(val);
        if (this.length === 0) {
            this.minHistory.push(val);
        } else {
            this.minHistory.push(Math.min(val, this.minHistory[this.length - 1]));
        }
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