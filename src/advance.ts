// Interface Extending + Class Implementation
interface Person {
  name: string;
  greet(): void;
}

interface Employee extends Person {
  employeeID: number;
  role: string;
}

class CompanyEmployee implements Employee {
  constructor(
    public name: string,
    public employeeID: number,
    public role: string
  ) {}

  greet(): void {
    console.log(`Hello, I am ${this.name}, working as ${this.role}`);
  }
}

const emp = new CompanyEmployee("Shampa", 101, "Engineer");
emp.greet();
console.log(`Employee ID: ${emp.employeeID}`);

// Generic Service Function
type APIResponse<T> = {
  status: number;
  data: T;
  message: string;
};

function handleResponse<T>(response: APIResponse<T>): T {
  if (response.status === 200) {
    return response.data;
  }
  throw new Error(response.message);
}

// Example usage
const userResponse: APIResponse<{ id: number; name: string }> = {
  status: 200,
  data: { id: 1, name: "Shampa" },
  message: "OK"
};

const userData = handleResponse(userResponse);
console.log(userData.name); // Shampa

// Class with Generics + Default Types
class DataStore<T = string> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const stringStore = new DataStore(); // default string
stringStore.add("Angular");
stringStore.add("TypeScript");

const numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);

console.log(stringStore.getAll());
console.log(numberStore.getAll());

// Generic Repository Class
type ID = string | number;

// Base interface
interface Entity {
  id: ID;
}

// Generic repository for CRUD operations
class Repository<T extends Entity> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getById(id: ID): T | undefined {
    // ES5-compatible find alternative
    for (const item of this.items) {
      if (item.id === id) {
        return item;
      }
    }
    return undefined;
  }

  getAll(): T[] {
    return [...this.items];
  }

  remove(id: ID) {
    this.items = this.items.filter(i => i.id !== id);
  }
}

// Example entity
interface User extends Entity {
  name: string;
  age: number;
}

// Usage
const userRepo = new Repository<User>();
userRepo.add({ id: 1, name: "Shampa", age: 25 });
console.log(userRepo.getAll());
console.log(userRepo.getById(1));


interface User {
  id: number;
  name: string;
  age: number;
}

function pick<T>(obj: T, key: string): any {
  return obj[key as keyof T]; // type assertion lagbe
}

const u: User = { id: 1, name: "Shampa", age: 25 };
console.log(pick(u, "name")); // "Shampa"
console.log(pick(u, "age"));  // 25
