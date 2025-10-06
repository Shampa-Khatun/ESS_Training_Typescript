// // function ReadOnly(
// //   target: any,
// //   propertyKey: string,
// //   descriptor: PropertyDescriptor
// // ) {
// //   descriptor.writable = false;
// // }

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
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
class Calculator {
  @first()
  add() {
    console.log("add method called");
  }
}