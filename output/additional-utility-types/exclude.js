/*
Exclude<Type, ExcludedUnion>
Ei type ta basically ekta type theke kichu value bad diye notun type banay.
Type → main union type
ExcludedUnion → je gulo bad dite chai
*/
// Runtime array to test output
const allStatuses = ["active", "inactive", "pending"];
// Filter using type-safe check
const allowedStatuses = allStatuses.filter((s) => s !== "inactive");
console.log(allowedStatuses);
// AllowedProducts = "laptop" | "phone" | "shirt" | "novel"
// Runtime array of products
const allProducts = [
    "laptop",
    "phone",
    "tablet",
    "shirt",
    "jeans",
    "novel",
    "textbook",
];
const disallowed = ["tablet", "jeans", "textbook"];
const allowedProducts = allProducts.filter((p) => disallowed.indexOf(p) === -1);
console.log(allowedProducts);
export {};
//# sourceMappingURL=exclude.js.map