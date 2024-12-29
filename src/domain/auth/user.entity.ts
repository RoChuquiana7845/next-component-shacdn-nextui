import { UserEmail, UserPassword } from "./user.value-object";

export class User {
  id: string;
  email: UserEmail;
  password: UserPassword;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, email: UserEmail, password: UserPassword) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  updatePassword(newPassword: UserPassword): void {
    this.password = newPassword;
    this.updatedAt = new Date();
  }
}
