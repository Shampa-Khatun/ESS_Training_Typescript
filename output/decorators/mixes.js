var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ---- Class Decorator ----
function RegisterClass(constructor) {
    console.log(`📌 Class Registered: ${constructor.name}`);
}
// ---- Property Decorator ----
function MinLength(length) {
    return function (target, propertyKey) {
        let value;
        Object.defineProperty(target, propertyKey, {
            set: (newVal) => {
                if (newVal.length < length) {
                    throw new Error(`${propertyKey} must be at least ${length} characters`);
                }
                value = newVal;
            },
            get: () => value,
        });
    };
}
// ---- Method Decorator ----
function LogMethod(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`🛠️ Method "${propertyKey}" called with:`, args);
        return original.apply(this, args);
    };
}
// ---- Using All Decorators ----
let User = class User {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    login() {
        console.log(`✅ User ${this.username} logged in successfully!`);
    }
};
__decorate([
    MinLength(3),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    MinLength(6),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    LogMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "login", null);
User = __decorate([
    RegisterClass,
    __metadata("design:paramtypes", [String, String])
], User);
// ---- Test ----
try {
    const user1 = new User("Shampa", "123456");
    user1.login();
}
catch (err) {
    console.error("❌ Error:", err.message);
}
try {
    const user2 = new User("Ab", "123"); // ❌ username too short, password too short
    user2.login();
}
catch (err) {
    console.error("❌ Error:", err.message);
}
export {};
//# sourceMappingURL=mixes.js.map