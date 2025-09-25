"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompanyEmployee {
    name;
    employeeID;
    role;
    constructor(name, employeeID, role) {
        this.name = name;
        this.employeeID = employeeID;
        this.role = role;
    }
    greet() {
        console.log(`Hello, I am ${this.name}, working as ${this.role}`);
    }
}
const emp = new CompanyEmployee("Shampa", 101, "Engineer");
emp.greet();
console.log(`Employee ID: ${emp.employeeID}`);
function handleResponse(response) {
    if (response.status === 200) {
        return response.data;
    }
    throw new Error(response.message);
}
// Example usage
const userResponse = {
    status: 200,
    data: { id: 1, name: "Shampa" },
    message: "OK"
};
const userData = handleResponse(userResponse);
console.log(userData.name); // Shampa
// Class with Generics + Default Types
class DataStore {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const stringStore = new DataStore(); // default string
stringStore.add("Angular");
stringStore.add("TypeScript");
const numberStore = new DataStore();
numberStore.add(10);
numberStore.add(20);
console.log(stringStore.getAll());
console.log(numberStore.getAll());
// Generic repository for CRUD operations
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getById(id) {
        // ES5-compatible find alternative
        for (const item of this.items) {
            if (item.id === id) {
                return item;
            }
        }
        return undefined;
    }
    getAll() {
        return [...this.items];
    }
    remove(id) {
        this.items = this.items.filter(i => i.id !== id);
    }
}
// Usage
const userRepo = new Repository();
userRepo.add({ id: 1, name: "Shampa", age: 25 });
console.log(userRepo.getAll());
console.log(userRepo.getById(1));
function pick(obj, key) {
    return obj[key]; // type assertion lagbe
}
const u = { id: 1, name: "Shampa", age: 25 };
console.log(pick(u, "name")); // "Shampa"
console.log(pick(u, "age")); // 25
//# sourceMappingURL=advance.js.map