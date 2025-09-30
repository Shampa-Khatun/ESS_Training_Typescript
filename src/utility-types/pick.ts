// Original interface
interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

// 👉 Using Pick to create a new type with limited properties
type PublicUserProfile = Pick<User, 'id' | 'name' | 'role' | 'createdAt'>;

// Function that converts full User to public profile
function toPublicProfile(user: User): PublicUserProfile {
  const { id, name, role, createdAt } = user;
  return { id, name, role, createdAt };
}

// Example usage
const fullUser: User = {
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
