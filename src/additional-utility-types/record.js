/*Record<Keys, Type>
Eta basically ekta object type banay jekhane:

Keys → object er keys er type (string, number, union etc)

Type → oi keys gular value ki type hobe*/
var _a;
var userAccess = {
    admin: 1,
    user: 2,
    guest: 3,
};
var students = {
    s1: { id: 1, name: "Shampa" },
    s2: { id: 2, name: "shahariar" },
};
var rolePermissions = {
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
console.log(rolePermissions.admin.delete);
var storeCatalog = {
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
console.log((_a = storeCatalog.books.textbook) === null || _a === void 0 ? void 0 : _a.inStock);
