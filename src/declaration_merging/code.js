function add(x, y) {
    return x + y;
}
console.log(add(2, 3)); // 5
console.log(add("Hi, ", "TS")); // Hi, TS
//namespace merging //Eta global augmentation er khetre o use kora jai.
var MyLib;
(function (MyLib) {
    function greet() {
        console.log("Hello");
    }
    MyLib.greet = greet;
})(MyLib || (MyLib = {}));
(function (MyLib) {
    function bye() {
        console.log("Goodbye");
    }
    MyLib.bye = bye;
})(MyLib || (MyLib = {}));
// Use
MyLib.greet(); // Hello
MyLib.bye(); // Goodbye
//interface + class merging
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var p = { name: "Shampa", age: 22 }; // valid
console.log(p);
