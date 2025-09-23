var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var CompanyEmployee = /** @class */ (function () {
    function CompanyEmployee(name, employeeID, role) {
        this.name = name;
        this.employeeID = employeeID;
        this.role = role;
    }
    CompanyEmployee.prototype.greet = function () {
        console.log("Hello, I am ".concat(this.name, ", working as ").concat(this.role));
    };
    return CompanyEmployee;
}());
var emp = new CompanyEmployee("Shampa", 101, "Engineer");
emp.greet();
console.log("Employee ID: ".concat(emp.employeeID));
function handleResponse(response) {
    if (response.status === 200) {
        return response.data;
    }
    throw new Error(response.message);
}
// Example usage
var userResponse = {
    status: 200,
    data: { id: 1, name: "Shampa" },
    message: "OK"
};
var userData = handleResponse(userResponse);
console.log(userData.name); // Shampa
// Class with Generics + Default Types
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.items = [];
    }
    DataStore.prototype.add = function (item) {
        this.items.push(item);
    };
    DataStore.prototype.getAll = function () {
        return this.items;
    };
    return DataStore;
}());
var stringStore = new DataStore(); // default string
stringStore.add("Angular");
stringStore.add("TypeScript");
var numberStore = new DataStore();
numberStore.add(10);
numberStore.add(20);
console.log(stringStore.getAll());
console.log(numberStore.getAll());
// Generic repository for CRUD operations
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.getById = function (id) {
        // ES5-compatible find alternative
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                return item;
            }
        }
        return undefined;
    };
    Repository.prototype.getAll = function () {
        return __spreadArray([], this.items, true);
    };
    Repository.prototype.remove = function (id) {
        this.items = this.items.filter(function (i) { return i.id !== id; });
    };
    return Repository;
}());
// Usage
var userRepo = new Repository();
userRepo.add({ id: 1, name: "Shampa", age: 25 });
console.log(userRepo.getAll());
console.log(userRepo.getById(1));
function pick(obj, key) {
    return obj[key]; // type assertion lagbe
}
var u = { id: 1, name: "Shampa", age: 25 };
console.log(pick(u, "name")); // "Shampa"
console.log(pick(u, "age")); // 25
