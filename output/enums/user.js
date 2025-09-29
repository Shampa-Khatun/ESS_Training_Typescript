// user.ts
import { UserRole } from "./enums";
function getUserAccess(role) {
    if (role === UserRole.ADMIN) {
        return " Full Access";
    }
    else if (role === UserRole.USER) {
        return " Limited Access";
    }
    else {
        return " Guest Access";
    }
}
console.log(getUserAccess(UserRole.ADMIN));
console.log(getUserAccess(UserRole.USER));
console.log(getUserAccess(UserRole.GUEST));
//# sourceMappingURL=user.js.map