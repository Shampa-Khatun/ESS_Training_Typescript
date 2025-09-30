/*
Exclude<Type, ExcludedUnion>
Ei type ta basically ekta type theke kichu value bad diye notun type banay.
Type → main union type
ExcludedUnion → je gulo bad dite chai
*/

type Status = "active" | "inactive" | "pending";

// Exclude "inactive"
type AllowedStatus = Exclude<Status, "inactive">; // "active" | "pending"

// Runtime array to test output
const allStatuses: Status[] = ["active", "inactive", "pending"];

// Filter using type-safe check
const allowedStatuses: AllowedStatus[] = allStatuses.filter(
  (s): s is AllowedStatus => s !== "inactive"
);

console.log(allowedStatuses); 
// Nested union type
type ProductCategory = "electronics" | "clothing" | "books";
type Electronics = "laptop" | "phone" | "tablet";
type Clothing = "shirt" | "jeans";
type Books = "novel" | "textbook";

// All products union
type AllProducts = Electronics | Clothing | Books;

// Suppose we want to exclude "tablet", "jeans", "textbook"
type AllowedProducts = Exclude<AllProducts, "tablet" | "jeans" | "textbook">;
// AllowedProducts = "laptop" | "phone" | "shirt" | "novel"

// Runtime array of products
const allProducts: AllProducts[] = [
  "laptop",
  "phone",
  "tablet",
  "shirt",
  "jeans",
  "novel",
  "textbook",
];

const disallowed = ["tablet", "jeans", "textbook"];

const allowedProducts = allProducts.filter(
  (p): p is AllowedProducts => disallowed.indexOf(p) === -1
);


console.log(allowedProducts);
