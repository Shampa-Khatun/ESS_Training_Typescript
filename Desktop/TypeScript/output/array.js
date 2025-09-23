var _a;
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Mango"];
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(fruits[1]); // Banana
//Generic Array Type
let names = ["Shampa", "Mahi", "Nusrat"];
let marks = [95, 88, 76];
console.log(names);
console.log(marks);
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log((_a = matrix[1]) === null || _a === void 0 ? void 0 : _a[2]); // 6
const number2 = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head = numbers[0];
//Iterating Arrays (for loop, for..of, forEach)
let nums = [10, 20, 30];
// Normal for loop
for (let i = 0; i < nums.length; i++) {
    console.log("Index", i, "Value", nums[i]);
}
// for..of
for (let n of nums) {
    console.log("For..of:", n);
}
// forEach
nums.forEach((value, index) => {
    console.log(`forEach -> index: ${index}, value: ${value}`);
});
//Common Array Methods
let arr = [1, 2, 3, 4, 5];
// push & pop
arr.push(6); // [1,2,3,4,5,6]
arr.pop(); // [1,2,3,4,5]
// shift & unshift
arr.shift(); // [2,3,4,5]
arr.unshift(0); // [0,2,3,4,5]
// map
let squared = arr.map(n => n * n);
console.log(squared); // [0,4,9,16,25]
// filter
let evens = arr.filter(n => n % 2 === 0);
console.log(evens); // [0,2,4]
// reduce
let sum = arr.reduce((acc, n) => acc + n, 0);
console.log(sum); // 14
//tuple
let person = ["Alice", 30];
console.log(person[0]); // Alice    
console.log(person[1]); // 30
// person[2] = "extra"; // Error: Tuple type '[string, number]'
person.push(100); // Allowed, but not type-safe
console.log(person); // ["Alice", 30, 100]
// Tuple with optional element
let employee = ["Bob", 25];
employee.push("Developer"); // Allowed
console.log(employee); // ["Bob", 25, "Developer"]
// employee.push(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string | undefined'.
// Tuple with rest elements
let rgb = [255, 0, 0, 128, 64]; // Valid
console.log(rgb); // [255, 0, 0, 128, 64]
// let invalidRgb: [number, number, ...number[]] = [255]; //
//readonly
let user = [101, "Mahi"];
console.log(user[0]); // 101
console.log(user[1]); // "Mahi"
function getPosition() {
    return [10, 20];
}
const pos = getPosition();
// pos[0] = 15; // ❌ Error
console.log(pos); // [10, 20]
//object types
const car = {
    type: "Toyota"
};
car.mileage = 2000;
console.log(car);
const nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
export {};
//# sourceMappingURL=array.js.map