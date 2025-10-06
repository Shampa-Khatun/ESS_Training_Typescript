//Nullable<Type> = type theke null and undefined remove kore notun type banay.
// DefinedStatus = "active" | "inactive"
// Runtime example
const statuses = ["active", "inactive", null, undefined];
const definedStatuses = statuses.filter((s) => s != null);
console.log(definedStatuses);
// DefinedMixed = string | number | boolean
const mixedValues = [1, "hello", true, null, undefined, "world"];
const filteredValues = mixedValues.filter((v) => v != null);
console.log(filteredValues);
// DefinedProducts = "laptop" | "phone" | "tablet" | "shirt" | "jeans" | "novel" | "textbook"
const allProducts = [
    "laptop",
    "phone",
    null,
    "tablet",
    "shirt",
    null,
    "jeans",
    "novel",
    "textbook",
    null,
];
const definedProducts = allProducts.filter((p) => p != null);
console.log(definedProducts);
export {};
//# sourceMappingURL=nonNullable.js.map