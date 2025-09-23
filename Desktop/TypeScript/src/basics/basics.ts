
// greet function with return value
function greetWithReturn(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greetWithReturn("World");
console.log(message);
// String type examples
let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;

// Output the values
console.log(color);
console.log(fullName);
console.log(age);
console.log(sentence);

const uniqueKey: symbol = Symbol('description');
const obj = {
  [uniqueKey]: 'This is a unique property'
};
console.log(obj[uniqueKey]); // "This is a unique property"

let greeting: string = "Hello, TypeScript!";

// Number
let userCount: number = 42;

// Boolean
let isLoading: boolean = true;

// Array of numbers
let scores: number[] = [100, 95, 98];

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
let randomValue: any = 10;
randomValue = "A string now";
randomValue = true; 
console.log(randomValue);

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v);

// Unknown
let data: unknown;

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
let strLength: number = (data as string).length;
console.log(strLength);


let w: unknown = 1; 
w = "string"; // no error

w = { 
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  } 
} as { runANonExistentMethod: () => void }
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod(); 
}

function processValue(value: unknown) {
  if (typeof value === 'string') {
    // value is now treated as string
    console.log(value.toUpperCase());
  } else if (Array.isArray(value)) {
    // value is now treated as any[]
    console.log(value.length);
  }
}


// Define missing types for Shape
type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; sideLength: number };
type Triangle = { kind: 'triangle'; base: number; height: number };
type Shape = Circle | Square | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    case 'triangle':
      return 0.5 * shape.base * shape.height;
    default:
      // TypeScript knows this should never happen
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

//Null & Undefined
let a: null = null;
let b: undefined = undefined;


function greet(name?: string) {
  console.log("Hello", name ?? "Guest");
}
greet();           // Hello Guest
greet("Shampa");   // Hello Shampa

// union with null & undefined
let username: string | null | undefined;
username = "Mahi";
username = null;
username = undefined;



