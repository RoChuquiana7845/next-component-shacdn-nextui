import { Client } from "./client.entity";

export class ClientAggregate {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  activate(): void {
    this.client.isActive = true;
  }

  deactivate(): void {
    this.client.isActive = false;
  }
}
