//Nullable<Type> = type theke null and undefined remove kore notun type banay.

type Status = "active" | "inactive" | null | undefined;

type DefinedStatus = NonNullable<Status>;
// DefinedStatus = "active" | "inactive"

// Runtime example
const statuses: Status[] = ["active", "inactive", null, undefined];
const definedStatuses: DefinedStatus[] = statuses.filter(
  (s): s is DefinedStatus => s != null
);

console.log(definedStatuses);


type Mixed = string | number | null | undefined | boolean;

// Remove null and undefined
type DefinedMixed = NonNullable<Mixed>;
// DefinedMixed = string | number | boolean

const mixedValues: Mixed[] = [1, "hello", true, null, undefined, "world"];
const filteredValues: DefinedMixed[] = mixedValues.filter(
  (v): v is DefinedMixed => v != null
);

console.log(filteredValues);


//complex
// Categories → Products, some can be null
type Category = "electronics" | "clothing" | "books" | null;
type Electronics = "laptop" | "phone" | "tablet" | null;
type Clothing = "shirt" | "jeans" | null;
type Books = "novel" | "textbook" | null;

type AllProducts = Electronics | Clothing | Books | null;

// Remove all nulls
type DefinedProducts = NonNullable<AllProducts>;
// DefinedProducts = "laptop" | "phone" | "tablet" | "shirt" | "jeans" | "novel" | "textbook"

const allProducts: AllProducts[] = [
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

const definedProducts: DefinedProducts[] = allProducts.filter(
  (p): p is DefinedProducts => p != null
);

console.log(definedProducts);
