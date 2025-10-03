// Simple type guard with typeof
function formatValue(value) {
    if (typeof value === 'string') {
        return value.trim().toUpperCase();
    }
    else {
        return value.toFixed(2);
    }
}
var result1 = formatValue('  hello  ');
var result2 = formatValue(42.1234);
console.log("formatValue:");
console.log(result1); // "HELLO"
console.log(result2); // "42.12"
// instanceof
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("Flying...");
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.swim = function () {
        console.log("Swimming...");
    };
    return Fish;
}());
function move(animal) {
    if (animal instanceof Bird) {
        animal.fly();
    }
    else {
        animal.swim();
    }
}
console.log("move:");
move(new Bird()); // Flying...
move(new Fish()); // Swimming...
function isCar(vehicle) {
    return vehicle.type === undefined;
}
function displayVehicleInfo(vehicle) {
    console.log("Make: ".concat(vehicle.make, ", Model: ").concat(vehicle.model, ", Year: ").concat(vehicle.year));
    if (isCar(vehicle)) {
        console.log("This is a car");
    }
    else if (!isCar(vehicle)) {
        console.log("This is a ".concat(vehicle.type, " motorcycle"));
    }
}
console.log("displayVehicleInfo:");
displayVehicleInfo({ make: "Toyota", model: "Corolla", year: 2020 });
displayVehicleInfo({ make: "Yamaha", model: "R1", year: 2021, type: "sport" });
function calculateArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
    }
}
console.log("calculateArea:");
console.log(calculateArea({ kind: "circle", radius: 10 })); // 314.159...
console.log(calculateArea({ kind: "square", sideLength: 5 })); // 25
function makeSound(animal) {
    if ("bark" in animal) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
console.log("makeSound:");
makeSound({ bark: function () { return console.log("Woof!"); } });
makeSound({ meow: function () { return console.log("Meow!"); } });
// assertions functions
function assertIsString(value) {
    if (typeof value !== 'string') {
        throw new Error('Value is not a string');
    }
}
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
function processInput(input) {
    assertIsString(input);
    console.log(input.toUpperCase());
}
function processNumber(value) {
    assert(typeof value === 'number', 'Value must be a number');
    return value * 2;
}
console.log("processInput:");
processInput("typescript"); // TYPESCRIPT
console.log("processNumber:");
console.log(processNumber(10)); // 20
// console.log(processNumber("oops")); // Error: Value must be a number
