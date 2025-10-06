// Function that converts full User to public profile
function toPublicProfile(user) {
    const { id, name, role, createdAt } = user;
    return { id, name, role, createdAt };
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
// Call function → get only picked fields
const publicProfile = toPublicProfile(fullUser);
console.log("Full User:", fullUser);
console.log("Public Profile (Pick):", publicProfile);
export {};
//# sourceMappingURL=pick.js.map