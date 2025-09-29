//Union + Enum + Optional Parameter
enum Role { Admin, User }

function greet(name: string, role?: Role): string {
  return `Hello ${name} as ${role ?? "Guest"}`;
}

console.log(greet("Shampa"));              
console.log(greet("Mahi", Role.Admin));    

//Any vs Unknown + Type Assertion
let x: any = 5;
let y: unknown = "10";

let res1 = x + 10;          // works
// let res2 = y + 10;       // error
let res2 = (y as string) + 10;

console.log(res1);  
console.log(res2);  

//Interface + keyof + Mapped Type
interface Person {
  name: string;
  age: number;
  active: boolean;
}

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

const p: Nullable<Person> = {
  name: null,
  age: 22,
  active: null
};

console.log(p);

//Function Overload + Array
function pick(arr: number[]): number;
function pick(arr: string[]): string;
function pick(arr: any[]): any {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

console.log(pick([1, 2, 3]));       
console.log(pick(["a", "b", "c"])); 

//Generic Function + Constraints
function identity<T extends { id: number }>(obj: T): number {
  return obj.id;
}

console.log(identity({ id: 101, name: "Shampa" })); 
console.log(identity({ id: 7 }));                   

//Type Narrowing + Union + Truthy/Falsy
function check(input: string | number | null) {
  if (input) {
    if (typeof input === "number") {
      return input ** 2;
    } else {
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
enum Status {
  Ready = 1,
  Loading,
  Done
}

console.log(Status.Ready);     
console.log(Status[2]);        
console.log(Status["Done"]);   

//Any + Unknown + Type Assertion
let a: any = "5";
let b: unknown = 10;

let c = a + b;                  
let d = (b as number) * (a as number); 

console.log(c, d);

//Function Overload Chaos
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(2, 3));       
console.log(combine("2", "3"));   
console.log(combine(2 as any, "3" as any)); 

//. Keyof + Generic + Mapped Type
type Flags<T> = {
  [K in keyof T]: boolean;
};

interface User {
  id: number;
  name: string;
  active: boolean;
}

let u: Flags<User> = { id: true, name: false, active: true };

console.log(u);

//Optional Parameter + Default + Nullish Coalescing
function greet2(name?: string) {
  return "Hello " + (name ?? "Guest");
}

console.log(greet2("Shampa")); 
console.log(greet2(""));       
console.log(greet2());         


