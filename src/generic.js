var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// generic is a reusable block of code which can be used with different types
var addID = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user = addID({
    name: "shampa",
    age: 25,
});
console.log("User Object:", user);
console.log("User ID:", user.id);
console.log("User Name:", user.name);
console.log("User Age:", user.age);
var user2 = "shahariar";
var response1 = {
    status: 200,
    type: "success",
    data: "This is a string"
};
console.log("API Response:", response1);
// generic with class
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString());
var stringContainer = { value: "Hello, Generics!" };
console.log(stringContainer.value); // Output: Hello, Generics!
var numbercounter = { value: 42 };
console.log(numbercounter.value); // Output: 42
//Generics + extends (Constraint)
function createLoggedPair(v1, v2) {
    console.log("creating pair: v1='".concat(v1, "', v2='").concat(v2, "'"));
    return [v1, v2];
}
createLoggedPair("shampa", 25);
// Output: creating pair: v1='shampa', v2='25'
// Return: ["shampa", 25]
createLoggedPair(10, 20);
// Output: creating pair: v1='10', v2='20'
// Return: [10, 20]
createLoggedPair("RUET", "CSE");
// Output: creating pair: v1='RUET', v2='CSE'
// Return: ["RUET", "CSE"]
//Error (boolean not allowed, because only string|number allowed)
// createLoggedPair(true, "test");
function createDefaultPair(v1, v2) {
    return [v1, v2];
}
console.log(createDefaultPair("shampa", 25));
function basic(v1, v2) {
    return [v1, v2];
}
console.log(basic("shampa", true));
console.log(basic("shampa", 25));
// console.log(basic(25, "shampa")); // error
function printObject(obj) {
    console.log("Object:", obj);
}
printObject({ name: "Shampa", age: 25 }); //  OK
printObject([1, 2, 3]); // OK (array is object)
//Error: number is not an object
// printObject(10);
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst([10, 20, 30]));
console.log(getFirst(["a", "b", "c"]));
// Error: boolean not allowed
// console.log(getFirst([true, false]));
console.log(getFirst(["RUET", "CSE"]));
var pair1 = { key: "age", value: 25 };
console.log(pair1); // { key: 'age', value: 25 }
var pair2 = { key: 1, value: "one" };
console.log(pair2); // { key: 1, value: 'one' }
function printPerson(person) {
    console.log("".concat(person.name, " is ").concat(person.age, " years old"));
}
printPerson({ name: "Shampa", age: 25 });
printPerson({ name: "Shahariar", age: 27, city: "Dhaka" });
