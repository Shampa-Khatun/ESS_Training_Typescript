//ReturnType<T> = function type er return type extract kore notun type banay.
function sum(a, b) {
    return a + b;
}
// SumReturn = number
// Runtime example
var result = sum(5, 10);
console.log(result);
function createUser(name, age) {
    return {
        name: name,
        age: age,
        active: true,
    };
}
// UserType = { name: string; age: number; active: boolean }
var user = createUser("Shampa", 23);
console.log(user);
function getUser(id) {
    if (id % 2 === 0) {
        return { id: id, name: "User" + id, status: "active" };
    }
    else {
        return { id: id, error: "User not found" };
    }
}
// GetUserReturn = 
// { id: number; name: string; status: "active"; } | { id: number; error: string; }
var user1 = getUser(2);
var user2 = getUser(3);
console.log(user1);
console.log(user2);
