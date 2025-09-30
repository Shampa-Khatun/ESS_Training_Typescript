//Omit<T, K> = T theke K gulo bad
// Original interface
interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string; // sensitive
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

// 👉 Using Omit to remove sensitive fields
type SafeUser = Omit<User, 'passwordHash' | 'email'>;

// Function that returns safe user (no password/email)
function toSafeUser(user: User): SafeUser {
  const { id, name, role, createdAt, updatedAt } = user;
  return { id, name, role, createdAt, updatedAt };
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

// Call function → remove passwordHash & email
const safeUser = toSafeUser(fullUser);

console.log("Full User:", fullUser);
console.log("Safe User (Omit):", safeUser);
