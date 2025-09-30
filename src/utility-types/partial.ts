//Partial<T> holo ekta utility type ja kono object type er shob property ke optional kore dei.

// full user type
type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  address: {
    city: string;
    zip: string;
  };
};

// Update function where not all fields are required
function updateUser(id: number, updates: Partial<User>) {
  console.log("Updating user:", id, updates);
}

// ✅ valid updates
updateUser(1, { name: "Shampa" });
updateUser(2, { age: 25, email: "shampa@example.com" });
//updateUser(3, { address: { city: "Dhaka" } }); // eta amke error dibe cz eta nested partial . so ekhane DeepPartial use korte hbe

updateUser(4, {}); // even empty object is allowed

//complex
// generic deep type
type DeepUser<T> = {
  meta: T;
  info: {
    details: {
      id: number;
      tags: string[];
    };
    optional?: boolean;
  };
};

// partial applied
type P1 = Partial<DeepUser<{ role: "admin" | "user" }>>;

/*
 What is P1 ?

Breakdown:
- meta?: { role: "admin" | "user" }
- info?: {
    details: {
      id: number;
      tags: string[];
    };
    optional?: boolean;
  }
*/

// another twist: Partial with union
type Config = {
  mode: "light" | "dark";
  cache: boolean;
  timeout: number;
};

type Mixed = Partial<Config> | { debug: true };

/*
 What is Mixed ?

Breakdown:
= { mode?: "light" | "dark"; cache?: boolean; timeout?: number }
   OR
  { debug: true }
*/


//tricky
// nested + partial + awaited combined
type SuperType = {
  user: Promise<{ id: number; name: string }>;
  settings: {
    theme: "light" | "dark";
    version: number;
  };
  log?: string[];
};

type Crazy = Partial<{
  data: Awaited<SuperType["user"]> | null;
  config: Partial<SuperType["settings"]>;
}>;

