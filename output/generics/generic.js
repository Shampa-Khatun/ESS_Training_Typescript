// generic is a reusable block of code which can be used with different types
const addID = (obj) => {
    let id = Math.random().toString(16);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "shampa",
    age: 25,
});
console.log("User Object:", user);
console.log("User ID:", user.id);
console.log("User Name:", user.name);
console.log("User Age:", user.age);
let user2 = "shahariar";
const response1 = {
    status: 200,
    type: "success",
    data: "This is a string"
};
console.log("API Response:", response1);
// generic with class
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
const value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString());
const stringContainer = { value: "Hello, Generics!" };
console.log(stringContainer.value); // Output: Hello, Generics!
const numbercounter = { value: 42 };
console.log(numbercounter.value); // Output: 42
//Generics + extends (Constraint)
function createLoggedPair(v1, v2) {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
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
const pair1 = { key: "age", value: 25 };
console.log(pair1); // { key: 'age', value: 25 }
const pair2 = { key: 1, value: "one" };
console.log(pair2); // { key: 1, value: 'one' }
function printPerson(person) {
    console.log(`${person.name} is ${person.age} years old`);
}
printPerson({ name: "Shampa", age: 25 });
printPerson({ name: "Shahariar", age: 27, city: "Dhaka" });
export {};
//# sourceMappingURL=generic.js.map