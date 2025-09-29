class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        if (this.elements.length == 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop()!; //! → tells TypeScript: ami sure, ekhane undefined hobe na
    }
}
const stack = new Stack<number>(3);

stack.push(10);
stack.push(20);

console.log(stack.pop()); // 20
console.log(stack.isEmpty()); // false
stack.pop();
console.log(stack.isEmpty()); // true
