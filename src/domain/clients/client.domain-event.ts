export class ClientCreatedEvent {
    constructor(
      public readonly clientId: string,
      public readonly createdAt: Date
    ) {}
  }
  
  export class ClientDeactivatedEvent {
    constructor(public readonly clientId: string, public readonly deactivatedAt: Date) {}
  }
  