"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
let person = merge({ name: 'John' }, 
//25    throw an error:Argument of type '25' is not assignable to parameter of type 'object'.
{ age: 25 });
console.log(person);
function prop(obj, key) {
    return obj[key];
}
let str = prop({ name: 'John' }, 'name');
console.log(str);
//# sourceMappingURL=advancegen.js.map