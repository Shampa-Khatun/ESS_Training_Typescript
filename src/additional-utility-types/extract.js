// OnlyActive = "active" | "pending"
// Runtime example
var statuses = ["active", "inactive", "pending"];
var activeStatuses = statuses.filter(function (s) { return s === "active" || s === "pending"; });
console.log(activeStatuses);
// StringsAndNumbers = string | number
var mixedValues = [1, "hello", true, "world", 42];
var filteredValues = mixedValues.filter(function (v) { return typeof v === "string" || typeof v === "number"; });
console.log(filteredValues);
// SelectedProducts = "laptop" | "phone" | "tablet" | "novel" | "textbook"
var allProducts = [
    "laptop",
    "phone",
    "tablet",
    "shirt",
    "jeans",
    "novel",
    "textbook",
];
var selected = allProducts.filter(function (p) {
    return ["laptop", "phone", "tablet", "novel", "textbook"].indexOf(p) !== -1;
});
console.log(selected);
