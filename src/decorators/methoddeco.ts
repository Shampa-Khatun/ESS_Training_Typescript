// TypeScript 5+ new decorator style (value, context)

type AnyFunc = (...args: any[]) => any;

// -----------------------------
// Log Decorator
// -----------------------------
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };
}

class Calculator {
  @Log
  add(a: number, b: number) {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(2, 3);

// -----------------------------
// RequireAdmin Decorator
function RequireAdmin() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (!(this as any).isAdmin) {
        throw new Error("Access Denied!");
      }
      return originalMethod.apply(this, args);
    };
  };
}


class Dashboard {
  isAdmin = true;

  @RequireAdmin()
  deleteUser(id: number) {
    console.log(`User ${id} deleted`);
  }
}

const d = new Dashboard();
d.deleteUser(101);

// -----------------------------
function Retry(retries: number) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      for (let i = 0; i < retries; i++) {
        try {
          return await originalMethod.apply(this, args);
        } catch (e) {
          console.log(`Retry ${i + 1} failed`);
        }
      }
      throw new Error("All retries failed");
    };
  };
}

class API {
  private counter = 0;

  @Retry(3)
  async fetchData() {
    this.counter++;
    if (this.counter < 3) throw new Error("Network error");
    return "Data fetched successfully";
  }
}

new API().fetchData().then(console.log).catch(console.error);
