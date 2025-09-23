// generic is a reusable block of code which can be used with different types
const addID = <T extends object>(obj: T) => {
    let id = Math.random().toString(16);
    return { ...obj, id };
}

let user = addID({
    name: "shampa",
    age: 25,
});

console.log("User Object:", user);
console.log("User ID:", user.id);
console.log("User Name:", user.name);
console.log("User Age:", user.age);

let user2 = "shahariar";
// addID(user2); // error as user2 is not an object

// generic with interface
interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const response1: APIResponse<string> = {
    status: 200,
    type: "success",
    data: "This is a string"    
}

console.log("API Response:", response1);


// generic with class
class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}
      
const value = new NamedValue<number>('myNumber');

value.setValue(10);

console.log(value.toString());

// generics in type alias
type Container<T> = { value: T };
const stringContainer: Container<string> = { value: "Hello, Generics!" };
console.log(stringContainer.value); // Output: Hello, Generics!
const numbercounter: Container<number> = { value: 42 };
console.log(numbercounter.value); // Output: 42

//Generics + extends (Constraint)
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
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

function createDefaultPair<S extends string | number = string, T extends string | number = number>(
  v1: S,
  v2: T
): [S, T] {
  return [v1, v2];
}

console.log(createDefaultPair("shampa", 25));

function basic<S extends string, T extends number | boolean>
(v1:S, v2:T):[S,T]{
    return [v1,v2];
}
console.log(basic("shampa", true));
console.log(basic("shampa", 25));
// console.log(basic(25, "shampa")); // error


function printObject<T extends object>(obj: T) {
  console.log("Object:", obj);
}

printObject({ name: "Shampa", age: 25 }); //  OK
printObject([1, 2, 3]);                   // OK (array is object)

//Error: number is not an object
// printObject(10);

function getFirst<T extends string | number>(arr: T[]): T {
  return arr[0];
}

console.log(getFirst([10, 20, 30]));       
console.log(getFirst(["a", "b", "c"]));    

// Error: boolean not allowed
// console.log(getFirst([true, false]));
console.log(getFirst(["RUET", "CSE"]));    

//generic interface
interface Pair<K, V> {
  key: K;
  value: V;
}   
const pair1: Pair<string, number> = { key: "age", value: 25 };
console.log(pair1); // { key: 'age', value: 25 }
const pair2: Pair<number, string> = { key: 1, value: "one" };
console.log(pair2); // { key: 1, value: 'one' }

interface Person {
  name: string;
  age: number;
}

function printPerson<T extends Person>(person: T) {
  console.log(`${person.name} is ${person.age} years old`);
}

printPerson({ name: "Shampa", age: 25 }); 
printPerson({ name: "Shahariar", age: 27, city: "Dhaka" })

