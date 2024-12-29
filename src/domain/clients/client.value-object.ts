export class ClientEmail {
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
  
  export class ClientPhone {
    private readonly value: string;
  
    constructor(value: string) {
      if (!this.isValid(value)) {
        throw new Error("Número de teléfono no válido");
      }
      this.value = value;
    }
  
    isValid(phone: string): boolean {
      const phoneRegex = /^(?:\+593\s?|0)([9][0-9]{8})$/;
      return phoneRegex.test(phone);
    }
  
    getValue(): string {
      return this.value;
    }
  }
  