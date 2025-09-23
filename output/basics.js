// greet function with return value
function greetWithReturn(name) {
    return `Hello, ${name}!`;
}
const message = greetWithReturn("World");
console.log(message);
// String type examples
let color = "blue";
let fullName = 'John Doe';
let age = 30;
let sentence = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;
// Output the values
console.log(color);
console.log(fullName);
console.log(age);
console.log(sentence);
const uniqueKey = Symbol('description');
const obj = {
    [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"
let greeting = "Hello, TypeScript!";
// Number
let userCount = 42;
// Boolean
let isLoading = true;
// Array of numbers
let scores = [100, 95, 98];
// Output the values
console.log(greeting);
console.log(userCount);
console.log(isLoading);
console.log(scores);
const user = {
    name: "Alice",
    age: 30,
    isAdmin: true
};
// TypeScript knows these properties exist
console.log(user.name);
//Any
let randomValue = 10;
randomValue = "A string now";
randomValue = true;
console.log(randomValue);
let v = true;
v = "string"; // no error as it can be "any" type
Math.round(v);
// Unknown
let data;
// assigning anything is fine
data = 10;
data = "text";
data = [1, 2, 3];
// must check before use
if (typeof data === "string") {
    console.log(data.toUpperCase()); // safe
}
// type assertion (force)
// Avoid redeclaring 'length' (conflicts with global)
let strLength = data.length;
console.log(strLength);
let w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
};
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
function processValue(value) {
    if (typeof value === 'string') {
        // value is now treated as string
        console.log(value.toUpperCase());
    }
    else if (Array.isArray(value)) {
        // value is now treated as any[]
        console.log(value.length);
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * Math.pow(shape.radius, 2);
        case 'square':
            return Math.pow(shape.sideLength, 2);
        case 'triangle':
            return 0.5 * shape.base * shape.height;
        default:
            // TypeScript knows this should never happen
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
//Null & Undefined
let a = null;
let b = undefined;
function greet(name) {
    console.log("Hello", name !== null && name !== void 0 ? name : "Guest");
}
greet(); // Hello Guest
greet("Shampa"); // Hello Shampa
// union with null & undefined
let username;
username = "Mahi";
username = null;
username = undefined;
export {};
//# sourceMappingURL=basics.js.map