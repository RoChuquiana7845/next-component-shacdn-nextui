import apiClient from "@/shared/utils/api-client";
import { User } from "@/shared/types/user";
import { Logger } from "@/shared/utils/logger";

export class AuthController {
  static async login(email: string, password: string): Promise<{ token: string }> {
    try {
      Logger.info("Attempting login", { context: "AuthController.login", data: { email } });
      const response = await apiClient.post("/auth/login", { email, password });
      Logger.info("Login successful", { context: "AuthController.login", data: { email } });
      return response.data as { token: string };
    } catch (error) {
      Logger.error("Error during login", {
        context: "AuthController.login",
        data: { email },
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  static async register(userData: Omit<User, "id" | "isActive" | "createdAt" | "updatedAt">): Promise<User> {
    try {
      Logger.info("Registering user", { context: "AuthController.register", data: { userData } });
      const response = await apiClient.post("/auth/register", userData);
      Logger.info("User registered successfully", { context: "AuthController.register" });
      return response.data as User;
    } catch (error) {
      Logger.error("Error during registration", {
        context: "AuthController.register",
        data: { userData },
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  static async logout(): Promise<void> {
    try {
      Logger.info("Logging out user", { context: "AuthController.logout" });
      await apiClient.post("/auth/logout");
      Logger.info("Logout successful", { context: "AuthController.logout" });
    } catch (error) {
      Logger.error("Error during logout", {
        context: "AuthController.logout",
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  static async getProfile(): Promise<User> {
    try {
      Logger.info("Fetching user profile", { context: "AuthController.getProfile" });
      const response = await apiClient.get("/auth/profile");
      Logger.info("User profile fetched successfully", { context: "AuthController.getProfile" });
      return response.data as User;
    } catch (error) {
      Logger.error("Error fetching profile", {
        context: "AuthController.getProfile",
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }
}
