"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryStatus = exports.ResponseFlag = exports.UserRole = exports.TaskStatus = exports.AppDirection = void 0;
// main.ts
// Numeric Enum
var AppDirection;
(function (AppDirection) {
    AppDirection[AppDirection["UP"] = 0] = "UP";
    AppDirection[AppDirection["DOWN"] = 1] = "DOWN";
    AppDirection[AppDirection["LEFT"] = 2] = "LEFT";
    AppDirection[AppDirection["RIGHT"] = 3] = "RIGHT";
})(AppDirection || (exports.AppDirection = AppDirection = {}));
// Custom Numeric Enum
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["PENDING"] = 1] = "PENDING";
    TaskStatus[TaskStatus["IN_PROGRESS"] = 5] = "IN_PROGRESS";
    TaskStatus[TaskStatus["DONE"] = 10] = "DONE";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
// String Enum
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["USER"] = "USER";
    UserRole["GUEST"] = "GUEST";
})(UserRole || (exports.UserRole = UserRole = {}));
// Heterogeneous Enum
var ResponseFlag;
(function (ResponseFlag) {
    ResponseFlag[ResponseFlag["YES"] = 1] = "YES";
    ResponseFlag["NO"] = "NO";
})(ResponseFlag || (exports.ResponseFlag = ResponseFlag = {}));
// String Enum for Orders
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["PENDING"] = "PENDING";
    DeliveryStatus["SHIPPED"] = "SHIPPED";
    DeliveryStatus["DELIVERED"] = "DELIVERED";
})(DeliveryStatus || (exports.DeliveryStatus = DeliveryStatus = {}));
//# sourceMappingURL=main.js.map