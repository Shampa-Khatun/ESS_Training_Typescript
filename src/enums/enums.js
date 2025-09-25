"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT"; // 3
})(Direction || (Direction = {}));
let move = Direction.UP;
console.log(move); // 0
console.log(Direction[0]); // "UP" (reverse mapping)
//custom
var Status;
(function (Status) {
    Status[Status["PENDING"] = 1] = "PENDING";
    Status[Status["IN_PROGRESS"] = 5] = "IN_PROGRESS";
    Status[Status["DONE"] = 10] = "DONE";
})(Status || (Status = {}));
console.log(Status.PENDING); // 1
console.log(Status[10]); // "DONE"
//string
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["USER"] = "USER";
    Role["GUEST"] = "GUEST";
})(Role || (Role = {}));
let myRole = Role.ADMIN;
console.log(myRole); // "ADMIN"
//heterogeneous
var MixEnum;
(function (MixEnum) {
    MixEnum[MixEnum["YES"] = 1] = "YES";
    MixEnum["NO"] = "NO";
})(MixEnum || (MixEnum = {}));
console.log(MixEnum.YES); // 1
console.log(MixEnum.NO); // "NO"
console.log(MixEnum[1]); // undefined
//const enums(compile time optimization)
var direct;
(function (direct) {
    direct[direct["UP"] = 0] = "UP";
    direct[direct["DOWN"] = 1] = "DOWN";
    direct[direct["LEFT"] = 2] = "LEFT";
    direct[direct["RIGHT"] = 3] = "RIGHT";
})(direct || (direct = {}));
let dir = direct.LEFT;
console.log(dir); // 2
//enums with functions
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["SHIPPED"] = "SHIPPED";
    OrderStatus["DELIVERED"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(OrderStatus.SHIPPED)); // false
console.log(isDelivered(OrderStatus.DELIVERED)); // true
const myTask = {
    title: "Complete TypeScript project",
    status: Status.IN_PROGRESS
};
console.log(myTask); // { title: 'Complete TypeScript project', status: 5 }
//enums with classes
class Job {
    title;
    status;
    constructor(title, status) {
        this.title = title;
        this.status = status;
    }
}
const job1 = new Job("Task 1", Status.PENDING);
const job2 = new Job("Task 2", Status.DONE);
console.log(job1); // Job { title: 'Task 1', status: 1 }
console.log(job2); // Job { title: 'Task 2', status: 10 }
//enum as flag
var Permission;
(function (Permission) {
    Permission[Permission["READ"] = 1] = "READ";
    Permission[Permission["WRITE"] = 2] = "WRITE";
    Permission[Permission["EXECUTE"] = 4] = "EXECUTE"; // 4
})(Permission || (Permission = {}));
let userPermission = Permission.READ | Permission.WRITE; // 3
console.log(userPermission & Permission.READ ? "Can Read" : "No Read"); // Can Read
console.log(userPermission & Permission.EXECUTE ? "Can Execute" : "No Execute"); // No Execute
console.log(userPermission); // 3
//create enums in multiple files
// main.ts
const main_1 = require("./main");
let mov = main_1.AppDirection.UP;
console.log("Move:", mov); // 0
let currentStatus = main_1.TaskStatus.IN_PROGRESS;
console.log("Task Status:", currentStatus); // 5
let mixed = main_1.ResponseFlag.NO;
console.log("ResponseFlag:", mixed); // "NO"
let order = main_1.DeliveryStatus.SHIPPED;
console.log("Order Status:", order); // "SHIPPED"
// user.ts
const main_2 = require("./main");
function getUserAccess(role) {
    if (role === main_2.UserRole.ADMIN) {
        return " Full Access";
    }
    else if (role === main_2.UserRole.USER) {
        return " Limited Access";
    }
    else {
        return " Guest Access";
    }
}
console.log(getUserAccess(main_2.UserRole.ADMIN));
console.log(getUserAccess(main_2.UserRole.USER));
console.log(getUserAccess(main_2.UserRole.GUEST));
//complex example
var ApiResponseStatus;
(function (ApiResponseStatus) {
    ApiResponseStatus["SUCCESS"] = "SUCCESS";
    ApiResponseStatus["ERROR"] = "ERROR";
    ApiResponseStatus["LOADING"] = "LOADING";
})(ApiResponseStatus || (ApiResponseStatus = {}));
function handleResponse(response) {
    switch (response.status) {
        case ApiResponseStatus.SUCCESS:
            console.log("Data:", response.data);
            break;
        case ApiResponseStatus.ERROR:
            console.log("Error:", response.error);
            break;
        case ApiResponseStatus.LOADING:
            console.log("Loading...");
            break;
    }
}
handleResponse({ status: ApiResponseStatus.SUCCESS, data: "User Data" });
handleResponse({ status: ApiResponseStatus.ERROR, error: "Network failed" });
handleResponse({ status: ApiResponseStatus.LOADING });
//# sourceMappingURL=enums.js.map