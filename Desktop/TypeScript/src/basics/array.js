var numbers = [1, 2, 3, 4, 5];
var fruits = ["Apple", "Banana", "Mango"];
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(fruits[1]); // Banana
//Generic Array Type
var names = ["Shampa", "Mahi", "Nusrat"];
var marks = [95, 88, 76];
console.log(names);
console.log(marks);
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // 6
var number2 = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var head = numbers[0];
//Iterating Arrays (for loop, for..of, forEach)
var nums = [10, 20, 30];
// Normal for loop
for (var i = 0; i < nums.length; i++) {
    console.log("Index", i, "Value", nums[i]);
}
// for..of
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var n = nums_1[_i];
    console.log("For..of:", n);
}
// forEach
nums.forEach(function (value, index) {
    console.log("forEach -> index: ".concat(index, ", value: ").concat(value));
});
//Common Array Methods
var arr = [1, 2, 3, 4, 5];
// push & pop
arr.push(6); // [1,2,3,4,5,6]
arr.pop(); // [1,2,3,4,5]
// shift & unshift
arr.shift(); // [2,3,4,5]
arr.unshift(0); // [0,2,3,4,5]
// map
var squared = arr.map(function (n) { return n * n; });
console.log(squared); // [0,4,9,16,25]
// filter
var evens = arr.filter(function (n) { return n % 2 === 0; });
console.log(evens); // [0,2,4]
// reduce
var sum = arr.reduce(function (acc, n) { return acc + n; }, 0);
console.log(sum); // 14
//tuple
var person = ["Alice", 30];
console.log(person[0]); // Alice    
console.log(person[1]); // 30
// person[2] = "extra"; // Error: Tuple type '[string, number]'
person.push(100); // Allowed, but not type-safe
console.log(person); // ["Alice", 30, 100]
// Tuple with optional element
var employee = ["Bob", 25];
employee.push("Developer"); // Allowed
console.log(employee); // ["Bob", 25, "Developer"]
// employee.push(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string | undefined'.
// Tuple with rest elements
var rgb = [255, 0, 0, 128, 64]; // Valid
console.log(rgb); // [255, 0, 0, 128, 64]
// let invalidRgb: [number, number, ...number[]] = [255]; //
