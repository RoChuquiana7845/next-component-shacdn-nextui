export interface User {
  id: string; 
  firstName: string; 
  lastName: string; 
  email: string; 
  password?: string; 
  birthDate: string; 
  role: "Admin" | "User" | "Guest"; 
  isActive: boolean; 
  createdAt: string; 
  updatedAt?: string; 
}
