// // function ReadOnly(
// //   target: any,
// //   propertyKey: string,
// //   descriptor: PropertyDescriptor
// // ) {
// //   descriptor.writable = false;
// // }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// // class Person {
// //   private _age: number = 20;
// //   @ReadOnly
// //   get age() {
// //     return this._age;
// //   }
// // }
// // Error: Cannot assign because it's read-only
// function MinLength(len: number) {
//   return function (target: any, propertyKey: string) {
//     let value: string;
//     Object.defineProperty(target, propertyKey, {
//       set: (newVal: string) => {
//         if (newVal.length < len) {
//           throw new Error(`${propertyKey} must be at least ${len} chars`);
//         }
//         value = newVal;
//       },
//       get: () => value,
//     });
//   };
// }
// class Person {
//   @MinLength(3)
//   name: string;
// }
// const p = new Person();
// p.name = "Sh"; // ❌ Error
// p.name = "Shampa"; // ✅ Ok
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
class Calculator {
    add() {
        console.log("add method called");
    }
}
__decorate([
    first(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Calculator.prototype, "add", null);
export {};
//# sourceMappingURL=accessor.js.map