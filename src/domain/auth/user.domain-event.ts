export class UserRegisteredEvent {
    constructor(
      public readonly userId: string,
      public readonly email: string,
      public readonly registeredAt: Date
    ) {}
  }
  
  export class UserDeletedEvent {
    constructor(public readonly userId: string, public readonly deletedAt: Date) {}
  }
  