var month = {
    key: 'Jan',
    value: 1
};
console.log(month);
// Generic List Class implementing Collection
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    // Add an item
    List.prototype.add = function (item) {
        this.items.push(item);
    };
    // Remove an item
    List.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    // Get item at index
    List.prototype.get = function (index) {
        return this.items[index];
    };
    // Get total number of items
    List.prototype.size = function () {
        return this.items.length;
    };
    // Check if list contains an item
    List.prototype.contains = function (item) {
        return this.items.indexOf(item) > -1;
    };
    // Clear all items
    List.prototype.clear = function () {
        this.items = [];
    };
    // Print all items
    List.prototype.print = function () {
        console.log(this.items);
    };
    return List;
}());
// ---------------------- Usage ----------------------
// Number List
var numberList = new List();
numberList.add(10);
numberList.add(20);
numberList.add(30);
numberList.print(); // [10, 20, 30]
numberList.remove(20);
console.log(numberList.contains(20)); // false
console.log(numberList.size()); // 2
// String List
var stringList = new List();
stringList.add("Shampa");
stringList.add("Mahi");
stringList.print(); // ["Shampa", "Mahi"]
stringList.remove("Shampa");
console.log(stringList.contains("Shampa")); // false
var personList = new List();
personList.add({ name: "Shampa", age: 22 });
personList.add({ name: "Mahi", age: 21 });
personList.print();
var inputOptions = {
    'disabled': false,
    'visible': true
};
