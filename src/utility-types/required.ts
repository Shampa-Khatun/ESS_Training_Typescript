//Required<T> TypeScript er ekta built-in utility type ja kono object er shob property ke required kore dei (jodi optional thake, ? remove hoye jabe).

type User = {
  id?: number;
  name?: string;
};

// Without Required
const u1: User = {}; // ✅ allowed (both optional)

// With Required
type StrictUser = Required<User>;
//const u2: StrictUser = {}; 
// Error: Property 'id' and 'name' are missing
/*
internally typescript amon kaj kore
type Required<T> = {
  [P in keyof T]-?: T[P];   //-? means → remove the ? optional modifier.
};
*/

type Config = {
  url?: string;
  token?: string;
};

function connect(cfg: Required<Config>) {
  console.log("Connecting to", cfg.url, "with token", cfg.token);
}

// connect({ url: "abc" });  token missing
connect({ url: "google", token: "123" }); 
