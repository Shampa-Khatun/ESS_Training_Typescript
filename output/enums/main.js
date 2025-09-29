// main.ts
// Numeric Enum
export var AppDirection;
(function (AppDirection) {
    AppDirection[AppDirection["UP"] = 0] = "UP";
    AppDirection[AppDirection["DOWN"] = 1] = "DOWN";
    AppDirection[AppDirection["LEFT"] = 2] = "LEFT";
    AppDirection[AppDirection["RIGHT"] = 3] = "RIGHT";
})(AppDirection || (AppDirection = {}));
// Custom Numeric Enum
export var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["PENDING"] = 1] = "PENDING";
    TaskStatus[TaskStatus["IN_PROGRESS"] = 5] = "IN_PROGRESS";
    TaskStatus[TaskStatus["DONE"] = 10] = "DONE";
})(TaskStatus || (TaskStatus = {}));
// String Enum
export var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["USER"] = "USER";
    UserRole["GUEST"] = "GUEST";
})(UserRole || (UserRole = {}));
// Heterogeneous Enum
export var ResponseFlag;
(function (ResponseFlag) {
    ResponseFlag[ResponseFlag["YES"] = 1] = "YES";
    ResponseFlag["NO"] = "NO";
})(ResponseFlag || (ResponseFlag = {}));
// String Enum for Orders
export var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["PENDING"] = "PENDING";
    DeliveryStatus["SHIPPED"] = "SHIPPED";
    DeliveryStatus["DELIVERED"] = "DELIVERED";
})(DeliveryStatus || (DeliveryStatus = {}));
//# sourceMappingURL=main.js.map