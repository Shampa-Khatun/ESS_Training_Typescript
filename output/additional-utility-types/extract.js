// OnlyActive = "active" | "pending"
// Runtime example
const statuses = ["active", "inactive", "pending"];
const activeStatuses = statuses.filter((s) => s === "active" || s === "pending");
console.log(activeStatuses);
// StringsAndNumbers = string | number
const mixedValues = [1, "hello", true, "world", 42];
const filteredValues = mixedValues.filter((v) => typeof v === "string" || typeof v === "number");
console.log(filteredValues);
// SelectedProducts = "laptop" | "phone" | "tablet" | "novel" | "textbook"
const allProducts = [
    "laptop",
    "phone",
    "tablet",
    "shirt",
    "jeans",
    "novel",
    "textbook",
];
const selected = allProducts.filter((p) => ["laptop", "phone", "tablet", "novel", "textbook"].indexOf(p) !== -1);
console.log(selected);
export {};
//# sourceMappingURL=extract.js.map