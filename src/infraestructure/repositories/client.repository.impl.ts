import { ClientController } from "@/infraestructure/api/client.controller";
import { Client } from "@/shared/types/client";
import { Logger } from "@/shared/utils/logger";

export class ClientRepository {
  static async getClients(): Promise<Client[]> {
    try {
      Logger.info("Fetching all clients from repository", { context: "ClientRepository.getClients" });
      const clients = await ClientController.fetchClients();
      Logger.info("Clients fetched successfully", { context: "ClientRepository.getClients", data: { count: clients.length } });
      return clients;
    } catch (error) {
      Logger.error("Error fetching clients in repository", { context: "ClientRepository.getClients", errorStack: error instanceof Error ? error.stack : undefined });
      throw error;
    }
  }

  static async getClientById(clientId: string): Promise<Client> {
    try {
      Logger.info("Fetching client by ID from repository", { context: "ClientRepository.getClientById", data: { clientId } });
      const client = await ClientController.fetchClientById(clientId);
      Logger.info("Client fetched successfully", { context: "ClientRepository.getClientById", data: { clientId } });
      return client;
    } catch (error) {
      Logger.error("Error fetching client by ID in repository", { context: "ClientRepository.getClientById", data: { clientId }, errorStack: error instanceof Error ? error.stack : undefined });
      throw error;
    }
  }

  static async addClient(clientData: Omit<Client, "id" | "isActive">): Promise<Client> {
    try {
      Logger.info("Adding new client to repository", { context: "ClientRepository.addClient", data: { clientData } });
      const newClient = await ClientController.createClient(clientData);
      Logger.info("Client added successfully", { context: "ClientRepository.addClient", data: { clientId: newClient.id } });
      return newClient;
    } catch (error) {
      Logger.error("Error adding new client in repository", { context: "ClientRepository.addClient", data: { clientData }, errorStack: error instanceof Error ? error.stack : undefined });
      throw error;
    }
  }

  static async modifyClient(clientId: string, clientData: Partial<Omit<Client, "id">>): Promise<Client> {
    try {
      Logger.info("Modifying client in repository", { context: "ClientRepository.modifyClient", data: { clientId, clientData } });
      const updatedClient = await ClientController.updateClient(clientId, clientData);
      Logger.info("Client modified successfully", { context: "ClientRepository.modifyClient", data: { clientId } });
      return updatedClient;
    } catch (error) {
      Logger.error("Error modifying client in repository", { context: "ClientRepository.modifyClient", data: { clientId, clientData }, errorStack: error instanceof Error ? error.stack : undefined });
      throw error;
    }
  }

  static async removeClient(clientId: string): Promise<void> {
    try {
      Logger.info("Removing client from repository", { context: "ClientRepository.removeClient", data: { clientId } });
      await ClientController.deleteClient(clientId);
      Logger.info("Client removed successfully", { context: "ClientRepository.removeClient", data: { clientId } });
    } catch (error) {
      Logger.error("Error removing client in repository", { context: "ClientRepository.removeClient", data: { clientId }, errorStack: error instanceof Error ? error.stack : undefined });
      throw error;
    }
  }
}
