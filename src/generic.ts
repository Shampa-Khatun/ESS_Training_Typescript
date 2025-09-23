// generic is a reusable block of code which can be used with different types
const addID = <T extends object>(obj: T) => {
    let id = Math.random().toString(16);
    return { ...obj, id };
}

let user = addID({
    name: "shampa",
    age: 25,
});

console.log("User Object:", user);
console.log("User ID:", user.id);
console.log("User Name:", user.name);
console.log("User Age:", user.age);

let user2 = "shahariar";
// addID(user2); // error as user2 is not an object

// generic with interface
interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const response1: APIResponse<string> = {
    status: 200,
    type: "success",
    data: "This is a string"    
}

console.log("API Response:", response1);

class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}
      
const value = new NamedValue<number>('myNumber');

value.setValue(10);

console.log(value.toString());