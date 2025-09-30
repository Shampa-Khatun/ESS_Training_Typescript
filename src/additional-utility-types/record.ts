/*Record<Keys, Type>
Eta basically ekta object type banay jekhane:

Keys → object er keys er type (string, number, union etc)

Type → oi keys gular value ki type hobe*/

type UserRole = "admin" | "user" | "guest";

const userAccess: Record<UserRole, number> = {
  admin: 1,
  user: 2,
  guest: 3,
};

type Student = {
  id: number;
  name: string;
};

const students: Record<string, Student> = {
  s1: { id: 1, name: "Shampa" },
  s2: { id: 2, name: "shahariar" },
};
type Role = "admin" | "editor" | "viewer";

type Permission = "read" | "write" | "delete";

type PermissionConfig = {
  allowed: boolean;
  expires?: Date; // optional expiry
};

const rolePermissions: Record<Role, Record<Permission, PermissionConfig>> = {
  admin: {
    read: { allowed: true },
    write: { allowed: true },
    delete: { allowed: true, expires: new Date("2025-12-31") },
  },
  editor: {
    read: { allowed: true },
    write: { allowed: true },
    delete: { allowed: false },
  },
  viewer: {
    read: { allowed: true },
    write: { allowed: false },
    delete: { allowed: false },
  },
};
console.log(rolePermissions.admin.delete)

type Category = "electronics" | "clothing" | "books";

type Product = "laptop" | "phone" | "shirt" | "novel" | "textbook";

type StockInfo = {
  price: number;
  inStock: boolean;
  discount?: number; // optional
};

// Trick: nested Record where only valid products allowed per category
type Catalog = Record<Category, Partial<Record<Product, StockInfo>>>;

const storeCatalog: Catalog = {
  electronics: {
    laptop: { price: 1200, inStock: true, discount: 10 },
    phone: { price: 700, inStock: false },
  },
  clothing: {
    shirt: { price: 40, inStock: true },
  },
  books: {
    novel: { price: 15, inStock: true },
    textbook: { price: 60, inStock: false },
  },
};

console.log(storeCatalog.electronics.laptop);
console.log(storeCatalog.books.textbook?.inStock);
