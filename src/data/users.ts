export interface User {
  id: string;
  username: string;
  email: string;
  role: "admin" | "customer";
}

export const users: User[] = [
  {
    id: "1",
    username: "admin",
    email: "admin@example.com",
    role: "admin",
  },
  {
    id: "2",
    username: "john_doe",
    email: "john@example.com",
    role: "customer",
  },
  // Add more users
];
