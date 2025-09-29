function printUser({ name, age }) {
    console.log(name, age);
}
printUser({ name: "Shampa", age: 22 });
function printItem({ name, price, quantity, seller: { name: sellerName, rating } }) {
    console.log(`${name} x ${quantity} = ${price * quantity} | Seller: ${sellerName} (${rating})`);
}
const laptop = {
    id: 101,
    name: "Laptop",
    price: 50000,
    quantity: 1,
    seller: { name: "TechStore", rating: 4.8 }
};
printItem(laptop);
// Array destructuring
const numbers = [100, 200, 300, 400, 500, 600];
// skip + rest
const [first, , third, ...rest] = numbers;
console.log(first); // 100
console.log(third); // 300
console.log(rest); // [400, 500, 600]
// swap trick
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1
//renaming
const student = { id: 1, fullName: "Shampa Khatun", age: 22 };
const { fullName: name, age: years } = student;
console.log(name); // Shampa Khatun
console.log(years); // 22
function greet({ name, age, location = "Unknown" }) {
    console.log(`Hello ${name}, age: ${age}, from: ${location}`);
}
greet({ name: "Shampa", age: 22 });
const response = {
    status: "ok",
    data: [
        { id1: 1, name1: "Shampa" },
        { id1: 2, name1: "Mahi" }
    ]
};
export {};
//# sourceMappingURL=code.js.map