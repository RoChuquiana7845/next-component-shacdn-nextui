import { User } from "./user.entity";
import { UserEmail, UserPassword } from "./user.value-object";

export class UserAggregate {
  private readonly user: User;

  constructor(user: User) {
    this.user = user;
  }

  register(emailValue: string, passwordValue: string): void {
    const email = new UserEmail(emailValue); 
    const password = new UserPassword(passwordValue); 

    if (!email.isValid(emailValue)) {
      throw new Error("Correo inválido");
    }

    this.user.email = email;
    this.user.password = password;
  }

}
