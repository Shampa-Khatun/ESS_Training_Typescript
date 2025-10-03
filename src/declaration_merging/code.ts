//this means if we have multiple declarations with the same name then TS will merge them into a single declaration  
//interface merging
interface User {
    id: number;
    name: string;
}

interface User {
    email: string;
    age: number;
}

//funtion merging (overloads)
function add(x: number, y: number): number;
function add(x: string, y: string): string;

function add(x: any, y: any) {
    return x + y;
}

console.log(add(2, 3));      // 5
console.log(add("Hi, ", "TS")); // Hi, TS

//namespace merging //Eta global augmentation er khetre o use kora jai.
namespace MyLib {
    export function greet() {
        console.log("Hello");
    }
}

namespace MyLib {
    export function bye() {
        console.log("Goodbye");
    }
}

// Use
MyLib.greet(); // Hello
MyLib.bye();   // Goodbye

//interface + class merging
class Person {
    constructor(public name: string) {}
}

interface Person {
    age: number;
}

const p: Person = { name: "Shampa", age: 22 }; // valid
console.log(p);

//enum merging
// First part of the enum
enum Direction {
  North,
  South
}

// Second part of the enum
enum Direction {
  East = 2,
  West = 3
}

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

//module augmentation
// Original library definition
// Imagine this comes from a third-party library
declare namespace LibraryModule {
  export interface User {
    id: number;
    name: string;
  }
  export function getUser(id: number): User;
}

// Augmenting with additional functionality (your code)
declare namespace LibraryModule {
  // Add new interface
  export interface UserPreferences {
    theme: string;
    notifications: boolean;
  }

  // Add new property to existing interface
  export interface User {
    preferences?: UserPreferences;
  }

  // Add new function
  export function getUserPreferences(userId: number): UserPreferences;
}

// Using the augmented module
const user = LibraryModule.getUser(123);
console.log(user.preferences?.theme);

const prefs = LibraryModule.getUserPreferences(123);
console.log(prefs.notifications);