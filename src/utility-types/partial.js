//Partial<T> holo ekta utility type ja kono object type er shob property ke optional kore dei.
// Update function where not all fields are required
function updateUser(id, updates) {
    console.log("Updating user:", id, updates);
}
// ✅ valid updates
updateUser(1, { name: "Shampa" });
updateUser(2, { age: 25, email: "shampa@example.com" });
//updateUser(3, { address: { city: "Dhaka" } }); // eta amke error dibe cz eta nested partial . so ekhane DeepPartial use korte hbe
updateUser(4, {}); // even empty object is allowed
