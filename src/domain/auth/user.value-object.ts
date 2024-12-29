export class UserEmail {
    private readonly value: string;
  
    constructor(value: string) {
      if (!this.isValid(value)) {
        throw new Error("Correo electrónico inválido");
      }
      this.value = value;
    }
  
    isValid(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    getValue(): string {
      return this.value;
    }
  }
  
  export class UserPassword {
    private readonly value: string;
  
    constructor(value: string) {
      if (!this.isValid(value)) {
        throw new Error("Contraseña no válida");
      }
      this.value = value;
    }
  
    isValid(password: string): boolean {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
      return passwordRegex.test(password);
    }
  
    getValue(): string {
      return this.value;
    }
  }
  