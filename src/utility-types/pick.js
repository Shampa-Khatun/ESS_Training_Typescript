// Function that converts full User to public profile
function toPublicProfile(user) {
    var id = user.id, name = user.name, role = user.role, createdAt = user.createdAt;
    return { id: id, name: name, role: role, createdAt: createdAt };
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
// Call function → get only picked fields
var publicProfile = toPublicProfile(fullUser);
console.log("Full User:", fullUser);
console.log("Public Profile (Pick):", publicProfile);
