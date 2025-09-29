function printUser(_a) {
    var name = _a.name, age = _a.age;
    console.log(name, age);
}
printUser({ name: "Shampa", age: 22 });
function printItem(_a) {
    var name = _a.name, price = _a.price, quantity = _a.quantity, _b = _a.seller, sellerName = _b.name, rating = _b.rating;
    console.log("".concat(name, " x ").concat(quantity, " = ").concat(price * quantity, " | Seller: ").concat(sellerName, " ( ").concat(rating, ")"));
}
var laptop = {
    id: 101,
    name: "Laptop",
    price: 50000,
    quantity: 1,
    seller: { name: "TechStore", rating: 4.8 }
};
printItem(laptop);
