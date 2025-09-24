// main.ts
// Numeric Enum
export enum AppDirection {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

// Custom Numeric Enum
export enum TaskStatus {
  PENDING = 1,
  IN_PROGRESS = 5,
  DONE = 10
}

// String Enum
export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}

// Heterogeneous Enum
export enum ResponseFlag {
  YES = 1,
  NO = "NO"
}

// String Enum for Orders
export enum DeliveryStatus {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED"
}