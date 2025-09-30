//Required<T> TypeScript er ekta built-in utility type ja kono object er shob property ke required kore dei (jodi optional thake, ? remove hoye jabe).
// Without Required
const u1 = {}; // ✅ allowed (both optional)
function connect(cfg) {
    console.log("Connecting to", cfg.url, "with token", cfg.token);
}
// connect({ url: "abc" });  token missing
connect({ url: "google", token: "123" });
export {};
//# sourceMappingURL=required.js.map