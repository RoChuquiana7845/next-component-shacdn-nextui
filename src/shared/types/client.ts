export interface Client {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    image?: File | null;
    website?: string;
    isActive: boolean;
  }
  