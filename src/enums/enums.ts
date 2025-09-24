enum Direction {
  UP,    // 0
  DOWN,  // 1
  LEFT,  // 2
  RIGHT  // 3
}

let move: Direction = Direction.UP;
console.log(move); // 0
console.log(Direction[0]); // "UP" (reverse mapping)

//custom
enum Status {
  PENDING = 1,
  IN_PROGRESS = 5,
  DONE = 10
}

console.log(Status.PENDING); // 1
console.log(Status[10]);     // "DONE"

//string
enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}

let myRole: Role = Role.ADMIN;
console.log(myRole); // "ADMIN"

//heterogeneous

enum MixEnum {
  YES = 1,
  NO = "NO"
}

console.log(MixEnum.YES); // 1
console.log(MixEnum.NO);  // "NO"
console.log(MixEnum[1]);  // undefined

//const enums(compile time optimization)
const enum direct {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

let dir = direct.LEFT;
console.log(dir); // 2

//enums with functions
enum OrderStatus {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED"
}

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED;
}

console.log(isDelivered(OrderStatus.SHIPPED));   // false
console.log(isDelivered(OrderStatus.DELIVERED)); // true

//enums with interfaces
interface Task {
  title: string;
  status: Status;
}   
const myTask: Task = {
  title: "Complete TypeScript project",
  status: Status.IN_PROGRESS
};
console.log(myTask); // { title: 'Complete TypeScript project', status: 5 }

//enums with classes
class Job {
  constructor(public title: string, public status: Status) {}
}

const job1 = new Job("Task 1", Status.PENDING);
const job2 = new Job("Task 2", Status.DONE);
console.log(job1); // Job { title: 'Task 1', status: 1 }
console.log(job2); // Job { title: 'Task 2', status: 10 }

//enum as flag
enum Permission {
  READ = 1 << 0,   // 1
  WRITE = 1 << 1,  // 2
  EXECUTE = 1 << 2 // 4
}

let userPermission = Permission.READ | Permission.WRITE; // 3

console.log(userPermission & Permission.READ ? "Can Read" : "No Read");   // Can Read
console.log(userPermission & Permission.EXECUTE ? "Can Execute" : "No Execute"); // No Execute

console.log(userPermission); // 3

//create enums in multiple files


// main.ts
import { AppDirection, TaskStatus, ResponseFlag, DeliveryStatus } from "./main";

let mov: AppDirection = AppDirection.UP;
console.log("Move:", mov); // 0

let currentStatus: TaskStatus = TaskStatus.IN_PROGRESS;
console.log("Task Status:", currentStatus); // 5

let mixed: ResponseFlag = ResponseFlag.NO;
console.log("ResponseFlag:", mixed); // "NO"

let order: DeliveryStatus = DeliveryStatus.SHIPPED;
console.log("Order Status:", order); // "SHIPPED"


// user.ts
import { UserRole } from "./main";

function getUserAccess(role: UserRole) {
  if (role === UserRole.ADMIN) {
    return " Full Access";
  } else if (role === UserRole.USER) {
    return " Limited Access";
  } else {
    return " Guest Access";
  }
}

console.log(getUserAccess(UserRole.ADMIN));  
console.log(getUserAccess(UserRole.USER));  
console.log(getUserAccess(UserRole.GUEST)); 


//complex example
enum ApiResponseStatus {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  LOADING = "LOADING"
}

type ApiResponse<T> = 
  | { status: ApiResponseStatus.SUCCESS, data: T }
  | { status: ApiResponseStatus.ERROR, error: string }
  | { status: ApiResponseStatus.LOADING };

function handleResponse(response: ApiResponse<string>) {
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
