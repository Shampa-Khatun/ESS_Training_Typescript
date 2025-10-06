//Class Decorator holo ekta function je class er constructor ke receive kore.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Logger(constructor) {
    console.log("Class created:", constructor.name);
}
let User = class User {
    name;
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    Logger,
    __metadata("design:paramtypes", [String])
], User);
const u = new User("Shampa");
console.log(u.name);
function Logger2(prefix) {
    return function (constructor) {
        console.log(`${prefix}: ${constructor.name}`);
    };
}
let Product = class Product {
};
Product = __decorate([
    Logger2("INFO")
], Product);
function AddCreatedAt(Base) {
    return class extends Base {
        createdAt = new Date();
    };
}
let Order = class Order {
    product;
    constructor(product) {
        this.product = product;
    }
};
Order = __decorate([
    AddCreatedAt,
    __metadata("design:paramtypes", [String])
], Order);
const o = new Order("Book");
console.log(o.product); // ✅ Book
console.log(o.createdAt); // ✅ Date object
//multiple class decorators
function First(constructor) {
    console.log("First decorator");
}
function Second(constructor) {
    console.log("Second decorator");
}
let Example = class Example {
};
Example = __decorate([
    First,
    Second
], Example);
function Singleton(constructor) {
    let instance;
    return class extends constructor {
        constructor(...args) {
            if (!instance) {
                super(...args);
                instance = this;
            }
            return instance;
        }
    };
}
let Database = class Database {
    url;
    constructor(url) {
        this.url = url;
    }
};
Database = __decorate([
    Singleton,
    __metadata("design:paramtypes", [String])
], Database);
const db1 = new Database("db://localhost");
const db2 = new Database("db://prod");
console.log(db1 === db2); // true
console.log(db1.url); // db://localhost
console.log(db2.url); // db://localhost
export {};
//# sourceMappingURL=classdeco.js.map