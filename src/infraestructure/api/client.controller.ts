import apiClient from "@/shared/utils/api-client";
import { Client } from "@/shared/types/client";
import { Logger } from "@/shared/utils/logger";

export class ClientController {
  static async fetchClients(): Promise<Client[]> {
    try {
      Logger.info("Fetching all clients", { context: "ClientController.fetchClients" });
      const response = await apiClient.get("/clients");
      Logger.info("Clients fetched successfully", { context: "ClientController.fetchClients", data: { count: response.data.length } });
      return response.data as Client[];
    } catch (error) {
      Logger.error("Error fetching clients", {
        context: "ClientController.fetchClients",
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  static async fetchClientById(clientId: string): Promise<Client> {
    try {
      Logger.info("Fetching client by ID", { context: "ClientController.fetchClientById", data: { clientId } });
      const response = await apiClient.get(`/clients/${clientId}`);
      Logger.info("Client fetched successfully", { context: "ClientController.fetchClientById", data: { clientId } });
      return response.data as Client;
    } catch (error) {
      Logger.error("Error fetching client by ID", {
        context: "ClientController.fetchClientById",
        data: { clientId },
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  static async createClient(clientData: Omit<Client, "id" | "isActive">): Promise<Client> {
    try {
      Logger.info("Creating new client", { context: "ClientController.createClient", data: { clientData } });
      const response = await apiClient.post("/clients", clientData);
      Logger.info("Client created successfully", { context: "ClientController.createClient", data: { clientId: response.data.id } });
      return response.data as Client;
    } catch (error) {
      Logger.error("Error creating client", {
        context: "ClientController.createClient",
        data: { clientData },
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  static async updateClient(clientId: string, clientData: Partial<Omit<Client, "id">>): Promise<Client> {
    try {
      Logger.info("Updating client", { context: "ClientController.updateClient", data: { clientId, clientData } });
      const response = await apiClient.put(`/clients/${clientId}`, clientData);
      Logger.info("Client updated successfully", { context: "ClientController.updateClient", data: { clientId } });
      return response.data as Client;
    } catch (error) {
      Logger.error("Error updating client", {
        context: "ClientController.updateClient",
        data: { clientId, clientData },
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  static async deleteClient(clientId: string): Promise<void> {
    try {
      Logger.info("Deleting client", { context: "ClientController.deleteClient", data: { clientId } });
      await apiClient.delete(`/clients/${clientId}`);
      Logger.info("Client deleted successfully", { context: "ClientController.deleteClient", data: { clientId } });
    } catch (error) {
      Logger.error("Error deleting client", {
        context: "ClientController.deleteClient",
        data: { clientId },
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }
}
