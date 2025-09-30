/*
Extract<Type, Union>
Eta basically ekta union type theke only specific members select kore notun type banay.
Opposite of Exclude

Extract<UnionType, SubsetUnion>
UnionType = original union
SubsetUnion = kon gulo select korte chai
*/
type Status = "active" | "inactive" | "pending";

// Only select active or pending
type OnlyActive = Extract<Status, "active" | "pending">;
// OnlyActive = "active" | "pending"

// Runtime example
const statuses: Status[] = ["active", "inactive", "pending"];
const activeStatuses: OnlyActive[] = statuses.filter(
  (s): s is OnlyActive => s === "active" || s === "pending"
);

console.log(activeStatuses);


type Mixed = string | number | boolean;

// Only select string or number
type StringsAndNumbers = Extract<Mixed, string | number>;
// StringsAndNumbers = string | number

const mixedValues: Mixed[] = [1, "hello", true, "world", 42];
const filteredValues: StringsAndNumbers[] = mixedValues.filter(
  (v): v is StringsAndNumbers => typeof v === "string" || typeof v === "number"
);

console.log(filteredValues);


//complex
// Categories → Products
type Category = "electronics" | "clothing" | "books";
type Electronics = "laptop" | "phone" | "tablet";
type Clothing = "shirt" | "jeans";
type Books = "novel" | "textbook";

type AllProducts = Electronics | Clothing | Books;

// Suppose we only want products from Electronics and Books
type SelectedProducts = Extract<AllProducts, Electronics | Books>;
// SelectedProducts = "laptop" | "phone" | "tablet" | "novel" | "textbook"

const allProducts: AllProducts[] = [
  "laptop",
  "phone",
  "tablet",
  "shirt",
  "jeans",
  "novel",
  "textbook",
];

const selected: SelectedProducts[] = allProducts.filter(
  (p): p is SelectedProducts => 
    ["laptop","phone","tablet","novel","textbook"].indexOf(p) !== -1
);


console.log(selected);
