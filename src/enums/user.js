"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// user.ts
var enums_1 = require("./enums");
function getUserAccess(role) {
    if (role === enums_1.UserRole.ADMIN) {
        return " Full Access";
    }
    else if (role === enums_1.UserRole.USER) {
        return " Limited Access";
    }
    else {
        return "Guest Access";
    }
}
console.log(getUserAccess(enums_1.UserRole.ADMIN));
console.log(getUserAccess(enums_1.UserRole.USER));
console.log(getUserAccess(enums_1.UserRole.GUEST));
