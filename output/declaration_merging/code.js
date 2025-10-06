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
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
const p = { name: "Shampa", age: 22 }; // valid
console.log(p);
//enum merging
// First part of the enum
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
})(Direction || (Direction = {}));
// Second part of the enum
(function (Direction) {
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
// After merging:
// enum Direction {
// North = 0,
// South = 1,
// East = 2,
// West = 3
// }
console.log(Direction.North); // 0
console.log(Direction.South); // 1
console.log(Direction.East); // 2
console.log(Direction.West); // 3
// Can also access by value
console.log(Direction[0]); // "North"
console.log(Direction[2]); // "East"
// Using the augmented module
const user = LibraryModule.getUser(123);
console.log(user.preferences?.theme);
const prefs = LibraryModule.getUserPreferences(123);
console.log(prefs.notifications);
export {};
//# sourceMappingURL=code.js.map