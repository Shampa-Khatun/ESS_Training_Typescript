"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Union + Enum + Optional Parameter
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
})(Role || (Role = {}));
function greet(name, role) {
    return `Hello ${name} as ${role ?? "Guest"}`;
}
console.log(greet("Shampa"));
console.log(greet("Mahi", Role.Admin));
//Any vs Unknown + Type Assertion
let x = 5;
let y = "10";
let res1 = x + 10; // works
// let res2 = y + 10;       // error
let res2 = y + 10;
console.log(res1);
console.log(res2);
const p = {
    name: null,
    age: 22,
    active: null
};
console.log(p);
function pick(arr) {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}
console.log(pick([1, 2, 3]));
console.log(pick(["a", "b", "c"]));
//Generic Function + Constraints
function identity(obj) {
    return obj.id;
}
console.log(identity({ id: 101, name: "Shampa" }));
console.log(identity({ id: 7 }));
//Type Narrowing + Union + Truthy/Falsy
function check(input) {
    if (input) {
        if (typeof input === "number") {
            return input ** 2;
        }
        else {
            return input.toUpperCase();
        }
    }
    return "EMPTY";
}
console.log(check("hi"));
console.log(check(3));
console.log(check(0));
console.log(check(null));
//Enum with Reverse Mapping
var Status;
(function (Status) {
    Status[Status["Ready"] = 1] = "Ready";
    Status[Status["Loading"] = 2] = "Loading";
    Status[Status["Done"] = 3] = "Done";
})(Status || (Status = {}));
console.log(Status.Ready);
console.log(Status[2]);
console.log(Status["Done"]);
//Any + Unknown + Type Assertion
let a = "5";
let b = 10;
let c = a + b;
let d = b * a;
console.log(c, d);
function combine(a, b) {
    return a + b;
}
console.log(combine(2, 3));
console.log(combine("2", "3"));
console.log(combine(2, "3"));
let u = { id: true, name: false, active: true };
console.log(u);
//Optional Parameter + Default + Nullish Coalescing
function greet2(name) {
    return "Hello " + (name ?? "Guest");
}
console.log(greet2("Shampa"));
console.log(greet2(""));
console.log(greet2());
//# sourceMappingURL=combined.js.map