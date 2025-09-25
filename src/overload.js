"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Implementation
function addToCart(input) {
    if (Array.isArray(input)) {
        console.log("Added multiple items:", input.map(i => i.name));
    }
    else {
        console.log("Added single item:", input.name);
    }
}
// Usage
addToCart({ name: "Laptop", price: 1000 });
addToCart([
    { name: "Phone", price: 500 },
    { name: "Headset", price: 100 }
]);
// Implementation
function sendNotification(input) {
    if (Array.isArray(input)) {
        console.log("Sending multiple notifications:");
        input.forEach(n => {
            if ('subject' in n)
                console.log(`Email to ${n.to}: ${n.subject}`);
            else
                console.log(`SMS to ${n.to}: ${n.message}`);
        });
    }
    else {
        if ('subject' in input)
            console.log(`Email to ${input.to}: ${input.subject}`);
        else
            console.log(`SMS to ${input.to}: ${input.message}`);
    }
}
// Usage
sendNotification({ to: "alice@example.com", subject: "Welcome", body: "Hello Alice!" });
sendNotification({ to: "01712345678", message: "OTP: 1234" });
sendNotification([
    { to: "bob@example.com", subject: "Update", body: "Check updates" },
    { to: "01798765432", message: "Your code is 9876" }
]);
// Implementation
function area(a, b) {
    if (Array.isArray(a)) {
        // Regular polygon: Approx area = (n^2)/4 * cot(π/n) for simplicity, here sum as dummy
        return a.reduce((sum, side) => sum + side ** 2, 0);
    }
    else if (b !== undefined) {
        // Rectangle
        return a * b;
    }
    else {
        // Circle, radius = a
        return Math.PI * a * a;
    }
}
// Usage
console.log(area(5)); // Circle area
console.log(area(4, 6)); // Rectangle area
console.log(area([2, 3, 4])); // Polygon area (sum of squares for trick example)
// Implementation
function log(value, prefix) {
    if (Array.isArray(value)) {
        // Array of strings/numbers
        return value.map(v => `[Array] ${v}`);
    }
    else if (typeof value === "boolean") {
        return `${prefix ?? "Bool"}: ${value ? "YES" : "NO"}`;
    }
    else if (typeof value === "string") {
        return `Str: ${value}`;
    }
    else {
        return value * 2; // Number case
    }
}
// Usage
console.log(log("Hello")); // "Str: Hello"
console.log(log(21)); // 42
console.log(log(true, "Status")); // "Status: YES"
console.log(log([1, "Test", 3])); // ["[Array] 1", "[Array] Test", "[Array] 3"]
//# sourceMappingURL=overload.js.map