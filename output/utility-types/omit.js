// Function that returns safe user (no password/email)
function toSafeUser(user) {
    const { id, name, role, createdAt, updatedAt } = user;
    return { id, name, role, createdAt, updatedAt };
}
// Example usage
const fullUser = {
    id: "u1",
    name: "Shampa",
    email: "shampa@example.com",
    passwordHash: "hashed_secret",
    role: "admin",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-09-01")
};
// Call function → remove passwordHash & email
const safeUser = toSafeUser(fullUser);
console.log("Full User:", fullUser);
console.log("Safe User (Omit):", safeUser);
export {};
//# sourceMappingURL=omit.js.map