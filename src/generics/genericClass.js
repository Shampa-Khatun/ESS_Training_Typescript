"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    size;
    elements = [];
    constructor(size) {
        this.size = size;
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    push(element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }
    pop() {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop(); //! → tells TypeScript: ami sure, ekhane undefined hobe na
    }
}
const stack = new Stack(3);
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
console.log(stack.isEmpty()); // false
stack.pop();
console.log(stack.isEmpty()); // true
//# sourceMappingURL=genericClass.js.map