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
// Options Manager Class using the interface
var OptionManager = /** @class */ (function () {
    function OptionManager(initialOptions) {
        if (initialOptions === void 0) { initialOptions = {}; }
        this.options = initialOptions;
    }
    // Add or update option
    OptionManager.prototype.set = function (name, value) {
        this.options[name] = value;
    };
    // Get option value
    OptionManager.prototype.get = function (name) {
        return this.options[name];
    };
    // Remove option
    OptionManager.prototype.remove = function (name) {
        delete this.options[name];
    };
    // Check if option exists
    OptionManager.prototype.has = function (name) {
        return name in this.options;
    };
    // Toggle boolean option
    OptionManager.prototype.toggle = function (name) {
        if (typeof this.options[name] === 'boolean') {
            this.options[name] = !this.options[name];
        }
        else {
            throw new Error("Option '".concat(name, "' is not boolean and cannot be toggled"));
        }
    };
    // Print all options
    OptionManager.prototype.print = function () {
        console.log(this.options);
    };
    return OptionManager;
}());
// ---------------- Usage ----------------
// Use your existing inputOptions
var inputOptions = {
    'disabled': false,
    'visible': true
};
// Create OptionManager instance
var manager = new OptionManager(inputOptions);
// Print initial options
manager.print();
// Output: { disabled: false, visible: true }
// Toggle a boolean option
manager.toggle('disabled');
manager.print();
// Output: { disabled: true, visible: true }
// Check existence
console.log(manager.has('visible')); // true
// Remove an option
manager.remove('visible');
manager.print();
// Output: { disabled: true }
// Add new option
manager.set('readonly', false);
manager.print();
// Output: { disabled: true, readonly: false }
