//Class Decorator holo ekta function je class er constructor ke receive kore.

function Logger(constructor: Function) {
  console.log("Class created:", constructor.name);
}

@Logger
class User {
  constructor(public name: string) {}
}

const u = new User("Shampa");
console.log(u.name);
function Logger2(prefix: string) {
  return function(constructor: Function) {
    console.log(`${prefix}: ${constructor.name}`);
  }
}

@Logger2("INFO")
class Product {}

//Modifying a Class (Replace Constructor)

type Constructor<T = {}> = new (...args: any[]) => T;

function AddCreatedAt<T extends Constructor>(Base: T) {
  return class extends Base {
    createdAt: Date = new Date();
  };
}

@AddCreatedAt
class Order {
  constructor(public product: string) {}
}

// Merge interface with class
interface Order {
  createdAt: Date;
}

const o = new Order("Book");
console.log(o.product);   // ✅ Book
console.log(o.createdAt); // ✅ Date object

//multiple class decorators

function First(constructor: Function) {
  console.log("First decorator");
}

function Second(constructor: Function) {
  console.log("Second decorator");
}

@First
@Second
class Example {}

function Singleton<T extends { new(...args: any[]): {} }>(constructor: T) {
  let instance: any;
  return class extends constructor {
    constructor(...args: any[]) {
      if (!instance) {
        super(...args);
        instance = this;
      }
      return instance;
    }
  }
}

@Singleton
class Database {
  constructor(public url: string) {}
}

const db1 = new Database("db://localhost");
const db2 = new Database("db://prod");

console.log(db1 === db2); // true
console.log(db1.url);     // db://localhost
console.log(db2.url);     // db://localhost



