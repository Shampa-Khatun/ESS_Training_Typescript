// TypeScript 5+ new decorator style (value, context)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// -----------------------------
// Log Decorator
// -----------------------------
function Log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Calling ${propertyKey} with`, args);
        const result = originalMethod.apply(this, args);
        console.log(`Result:`, result);
        return result;
    };
}
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    Log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Calculator.prototype, "add", null);
const calc = new Calculator();
calc.add(2, 3);
// -----------------------------
// RequireAdmin Decorator
function RequireAdmin() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (!this.isAdmin) {
                throw new Error("Access Denied!");
            }
            return originalMethod.apply(this, args);
        };
    };
}
class Dashboard {
    isAdmin = true;
    deleteUser(id) {
        console.log(`User ${id} deleted`);
    }
}
__decorate([
    RequireAdmin(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Dashboard.prototype, "deleteUser", null);
const d = new Dashboard();
d.deleteUser(101);
// -----------------------------
function Retry(retries) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args) {
            for (let i = 0; i < retries; i++) {
                try {
                    return await originalMethod.apply(this, args);
                }
                catch (e) {
                    console.log(`Retry ${i + 1} failed`);
                }
            }
            throw new Error("All retries failed");
        };
    };
}
class API {
    counter = 0;
    async fetchData() {
        this.counter++;
        if (this.counter < 3)
            throw new Error("Network error");
        return "Data fetched successfully";
    }
}
__decorate([
    Retry(3),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], API.prototype, "fetchData", null);
new API().fetchData().then(console.log).catch(console.error);
export {};
//# sourceMappingURL=methoddeco.js.map