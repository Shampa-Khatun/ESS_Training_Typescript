// Function that returns safe user (no password/email)
function toSafeUser(user) {
    var id = user.id, name = user.name, role = user.role, createdAt = user.createdAt, updatedAt = user.updatedAt;
    return { id: id, name: name, role: role, createdAt: createdAt, updatedAt: updatedAt };
}
// Example usage
var fullUser = {
    id: "u1",
    name: "Shampa",
    email: "shampa@example.com",
    passwordHash: "hashed_secret",
    role: "admin",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-09-01")
};
// Call function → remove passwordHash & email
var safeUser = toSafeUser(fullUser);
console.log("Full User:", fullUser);
console.log("Safe User (Omit):", safeUser);
