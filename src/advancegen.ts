function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}
let person = merge(
    { name: 'John' },
    //25    throw an error:Argument of type '25' is not assignable to parameter of type 'object'.
    {age: 25}
)

console.log(person);

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let str = prop({ name: 'John' }, 'name');
console.log(str);