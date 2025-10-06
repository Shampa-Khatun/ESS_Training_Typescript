// ---- Class Decorator ----
function RegisterClass(constructor: Function) {
  console.log(`📌 Class Registered: ${constructor.name}`);
}

// ---- Property Decorator ----
function MinLength(length: number) {
  return function (target: any, propertyKey: string) {
    let value: string;
    Object.defineProperty(target, propertyKey, {
      set: (newVal: string) => {
        if (newVal.length < length) {
          throw new Error(
            `${propertyKey} must be at least ${length} characters`
          );
        }
        value = newVal;
      },
      get: () => value,
    });
  };
}

// ---- Method Decorator ----
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`🛠️ Method "${propertyKey}" called with:`, args);
    return original.apply(this, args);
  };
}

// ---- Using All Decorators ----
@RegisterClass
class User {
  @MinLength(3)
  username: string;

  @MinLength(6)
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  @LogMethod
  login() {
    console.log(`✅ User ${this.username} logged in successfully!`);
  }
}

// ---- Test ----
try {
  const user1 = new User("Shampa", "123456");
  user1.login();
} catch (err: any) {
  console.error("❌ Error:", err.message);
}

try {
  const user2 = new User("Ab", "123"); // ❌ username too short, password too short
  user2.login();
} catch (err: any) {
  console.error("❌ Error:", err.message);
}
