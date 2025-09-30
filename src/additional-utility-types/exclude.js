/*
Exclude<Type, ExcludedUnion>
Ei type ta basically ekta type theke kichu value bad diye notun type banay.
Type → main union type
ExcludedUnion → je gulo bad dite chai
*/
// Runtime array to test output
var allStatuses = ["active", "inactive", "pending"];
// Filter using type-safe check
var allowedStatuses = allStatuses.filter(function (s) { return s !== "inactive"; });
console.log(allowedStatuses);
// AllowedProducts = "laptop" | "phone" | "shirt" | "novel"
// Runtime array of products
var allProducts = [
    "laptop",
    "phone",
    "tablet",
    "shirt",
    "jeans",
    "novel",
    "textbook",
];
var disallowed = ["tablet", "jeans", "textbook"];
var allowedProducts = allProducts.filter(function (p) { return disallowed.indexOf(p) === -1; });
console.log(allowedProducts);
