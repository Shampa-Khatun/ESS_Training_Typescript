"use strict";
// let vacant: {} = {};
// console.log(vacant.toString());
// const fetchData = async (url: string): Promise<unknown> => {
//     const response = await fetch(url);
//     return await response.json();
// };
Object.defineProperty(exports, "__esModule", { value: true });
// const showPosts = async () => {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     try {
//         const posts = await fetchData(url); // unknown type
//         (
//             posts as { userId: number; id: number; title: string; body: string }[]
//         ).map((post) => console.log(post.title));
//     } catch (err) {
//         console.log(err);
//     }
// };
// showPosts();
// //example 2
// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
// const FetchData = async (url: string): Promise<unknown> => {
//   const response = await fetch(url);
//   return await response.json();
// };
// const showUsers = async () => {
//   const url = 'https://jsonplaceholder.typicode.com/users';
//   try {
//     const data = await  FetchData(url); // unknown
//     if (Array.isArray(data)) {
//       data.forEach((item) => {
//         // Type narrowing: check if object has expected properties
//         if (typeof item.id === "number" && typeof item.name === "string") {
//           const user = item as User; 
//           console.log(`User: ${user.name}, Email: ${user.email}`);
//         }
//       });
//     }
//   } catch (err) {
//     console.error("Error fetching users:", err);
//   }
// };
// showUsers();
// //enum
// enum ApprovalStatus {
//     draft,
//     submitted,
//     approved,
//     rejected
// };
// const request =  {
//     id: 1,
//     status: ApprovalStatus.approved,
//     description: 'Please approve this request'
// };
// if(request.status === ApprovalStatus.approved) {
//     // send an email
//     console.log('Send email to the Applicant...');
// }
//Optional parameters must come after the required parameters. However, default parameters don’t need to appear after the required parameters.
//When a default parameter appears before a required parameter, you need to explicitly pass undefined to get the default initialized value.
function greet(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
}
greet("Shampa"); // ✅ Name: Shampa, Age: undefined
greet("Shampa", 22); // ✅ Name: Shampa, Age: 22
//Rest parameters with multiple types
function combine(...args) {
    let total = 0;
    let str = '';
    args.forEach((arg) => {
        if (typeof arg === 'number') {
            total += arg;
        }
        else if (typeof arg === 'string') {
            str += arg;
        }
    });
    return [total, str];
}
const [total, str] = combine(3, 'Happy', 2, 1, ' New Year');
console.log({ total });
console.log({ str });
//method overloading
class Counter {
    current = 0;
    count(target) {
        if (target) {
            let values = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            // set current to target
            this.current = target;
            return values;
        }
        return ++this.current;
    }
}
let counter = new Counter();
console.log(counter.count()); // return a number
console.log(counter.count(5)); // return an array
//# sourceMappingURL=practice.js.map