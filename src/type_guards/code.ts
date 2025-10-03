// Simple type guard with typeof
function formatValue(value: string | number): string {
  if (typeof value === 'string') {
    return value.trim().toUpperCase();
  } else {
    return value.toFixed(2);
  }
}

const result1 = formatValue('  hello  ');  
const result2 = formatValue(42.1234);      
console.log("formatValue:");
console.log(result1);   // "HELLO"
console.log(result2);   // "42.12"


// instanceof
class Bird {
  fly() {
    console.log("Flying...");
   }
}

class Fish {
  swim() {
    console.log("Swimming...");
   }
}

function move(animal: Bird | Fish) {
  if (animal instanceof Bird) {
    animal.fly();
  } else {
    animal.swim();
  }
}

console.log("move:");
move(new Bird());   // Flying...
move(new Fish());   // Swimming...


// User-Defined Type Guards
interface Car {
  make: string;
  model: string;
  year: number;
}

interface Motorcycle {
  make: string;
  model: string;
  year: number;
  type: "sport" | "cruiser";
}

function isCar(vehicle: Car | Motorcycle): vehicle is Car {
  return (vehicle as Motorcycle).type === undefined;
}

function displayVehicleInfo(vehicle: Car | Motorcycle) {
  console.log(`Make: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`);
  if (isCar(vehicle)) {
    console.log("This is a car");
  } else if (!isCar(vehicle)) {
    console.log(`This is a ${(vehicle as Motorcycle).type} motorcycle`);
  }
}

console.log("displayVehicleInfo:");
displayVehicleInfo({ make: "Toyota", model: "Corolla", year: 2020 });
displayVehicleInfo({ make: "Yamaha", model: "R1", year: 2021, type: "sport" });


// Discriminated Unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function calculateArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

console.log("calculateArea:");
console.log(calculateArea({ kind: "circle", radius: 10 })); // 314.159...
console.log(calculateArea({ kind: "square", sideLength: 5 })); // 25


// the in operator
interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

console.log("makeSound:");
makeSound({ bark: () => console.log("Woof!") });
makeSound({ meow: () => console.log("Meow!") });


// assertions functions
function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('Value is not a string');
  }
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function processInput(input: unknown) {
  assertIsString(input);
  console.log(input.toUpperCase());
}

function processNumber(value: unknown): number {
  assert(typeof value === 'number', 'Value must be a number');
  return value * 2;
}

console.log("processInput:");
processInput("typescript");   // TYPESCRIPT

console.log("processNumber:");
console.log(processNumber(10)); // 20
// console.log(processNumber("oops")); // Error: Value must be a number
