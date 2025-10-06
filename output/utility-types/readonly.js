const u = { id: 1, name: "Shampa" };
const p = { id: 1, settings: { darkMode: true } };
// p.id = 2;            // error
p.settings.darkMode = false; // allowed (inner object not readonly!)
const config = {
    appName: "MentorHub",
    version: "1.0.0",
    features: ["quiz", "cheat-sheet", "translation"]
};
export {};
/*const user: DeepReadonly<User> = {
id: "u123",
 profile: {
   name: "shampa",
   email: "shampa.com"
 }
};

// Error: Cannot assign to 'name' because it is a read-only property
// user.profile.name = "New Name";*/ 
//# sourceMappingURL=readonly.js.map