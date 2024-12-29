import { AuthController } from "@/infraestructure/api/auth.controller";
import { User } from "@/shared/types/user";
import { Logger } from "@/shared/utils/logger";

export class UserRepository {
  static async login(email: string, password: string): Promise<string> {
    try {
      Logger.info("Logging in user", {
        context: "UserRepository.login",
        data: { email },
      });
      const { token } = await AuthController.login(email, password);
      Logger.info("User logged in successfully", {
        context: "UserRepository.login",
        data: { email },
      });
      return token;
    } catch (error) {
      Logger.error("Error logging in user", {
        context: "UserRepository.login",
        data: { email },
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  static async register(
    userData: Omit<User, "id" | "isActive" | "createdAt" | "updatedAt">
  ): Promise<User> {
    try {
      Logger.info("Registering new user", {
        context: "UserRepository.register",
        data: { userData },
      });
      const user = await AuthController.register(userData);
      Logger.info("User registered successfully", {
        context: "UserRepository.register",
        data: { userId: user.id },
      });
      return user;
    } catch (error) {
      Logger.error("Error registering user", {
        context: "UserRepository.register",
        data: { userData },
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  static async logout(): Promise<void> {
    try {
      Logger.info("Logging out user", { context: "UserRepository.logout" });
      await AuthController.logout();
      Logger.info("User logged out successfully", {
        context: "UserRepository.logout",
      });
    } catch (error) {
      Logger.error("Error logging out user", {
        context: "UserRepository.logout",
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }

  static async getProfile(): Promise<User> {
    try {
      Logger.info("Fetching user profile", {
        context: "UserRepository.getProfile",
      });
      const user = await AuthController.getProfile();
      Logger.info("User profile fetched successfully", {
        context: "UserRepository.getProfile",
        data: { userId: user.id },
      });
      return user;
    } catch (error) {
      Logger.error("Error fetching user profile", {
        context: "UserRepository.getProfile",
        errorStack: error instanceof Error ? error.stack : undefined,
      });
      throw error;
    }
  }
}
