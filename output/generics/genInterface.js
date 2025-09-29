let month = {
    key: 'Jan',
    value: 1
};
console.log(month);
// Generic List Class implementing Collection
class List {
    constructor() {
        this.items = [];
    }
    // Add an item
    add(item) {
        this.items.push(item);
    }
    // Remove an item
    remove(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
    // Get item at index
    get(index) {
        return this.items[index];
    }
    // Get total number of items
    size() {
        return this.items.length;
    }
    // Check if list contains an item
    contains(item) {
        return this.items.indexOf(item) > -1;
    }
    // Clear all items
    clear() {
        this.items = [];
    }
    // Print all items
    print() {
        console.log(this.items);
    }
}
// ---------------------- Usage ----------------------
// Number List
const numberList = new List();
numberList.add(10);
numberList.add(20);
numberList.add(30);
numberList.print(); // [10, 20, 30]
numberList.remove(20);
console.log(numberList.contains(20)); // false
console.log(numberList.size()); // 2
// String List
const stringList = new List();
stringList.add("Shampa");
stringList.add("Mahi");
stringList.print(); // ["Shampa", "Mahi"]
stringList.remove("Shampa");
console.log(stringList.contains("Shampa")); // false
const personList = new List();
personList.add({ name: "Shampa", age: 22 });
personList.add({ name: "Mahi", age: 21 });
personList.print();
let inputOptions = {
    'disabled': false,
    'visible': true
};
export {};
//# sourceMappingURL=genInterface.js.map