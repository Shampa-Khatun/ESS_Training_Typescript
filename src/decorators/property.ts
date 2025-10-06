function MinLength(length: number) {
  return function (target: any, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length < length) {
        throw new Error(`${propertyKey} must be at least ${length} chars`);
      }
      value = newVal;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

class Person {
  @MinLength(3)
  name: string = "Sh"; // ❌ Error
}
function Format(target: any, propertyKey: string) {
  console.log(`Property Decorator applied on: ${propertyKey}`);
}

class User {
  @Format
  email: string = "abc@gmail.com";
}
// Output: Property Decorator applied on: email
