//ReturnType<T> = function type er return type extract kore notun type banay.
function sum(a: number, b: number) {
  return a + b;
}

type SumReturn = ReturnType<typeof sum>;
// SumReturn = number

// Runtime example
const result: SumReturn = sum(5, 10);
console.log(result);


function createUser(name: string, age: number) {
  return {
    name,
    age,
    active: true,
  };
}

type UserType = ReturnType<typeof createUser>;
// UserType = { name: string; age: number; active: boolean }

const user: UserType = createUser("Shampa", 23);
console.log(user);


//advance
type Status = "active" | "inactive";

function getUser(id: number) {
  if (id % 2 === 0) {
    return { id, name: "User" + id, status: "active" as Status };
  } else {
    return { id, error: "User not found" };
  }
}

// Extract return type
type GetUserReturn = ReturnType<typeof getUser>;
// GetUserReturn = 
// { id: number; name: string; status: "active"; } | { id: number; error: string; }

const user1: GetUserReturn = getUser(2);
const user2: GetUserReturn = getUser(3);

console.log(user1);
console.log(user2);
