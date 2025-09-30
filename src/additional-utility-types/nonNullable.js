//Nullable<Type> = type theke null and undefined remove kore notun type banay.
// DefinedStatus = "active" | "inactive"
// Runtime example
var statuses = ["active", "inactive", null, undefined];
var definedStatuses = statuses.filter(function (s) { return s != null; });
console.log(definedStatuses);
// DefinedMixed = string | number | boolean
var mixedValues = [1, "hello", true, null, undefined, "world"];
var filteredValues = mixedValues.filter(function (v) { return v != null; });
console.log(filteredValues);
// DefinedProducts = "laptop" | "phone" | "tablet" | "shirt" | "jeans" | "novel" | "textbook"
var allProducts = [
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
var definedProducts = allProducts.filter(function (p) { return p != null; });
console.log(definedProducts);
