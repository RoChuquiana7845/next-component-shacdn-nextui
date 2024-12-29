// /shared/utils/logger.ts
import { LogDetails } from "@/shared/types/logger";

export class Logger {
  static log(message: string, details?: LogDetails) {
    console.log(`[LOG] ${details?.timestamp || new Date().toISOString()} - ${message}`, details);
  }

  static info(message: string, details?: LogDetails) {
    console.info(`[INFO] ${details?.timestamp || new Date().toISOString()} - ${message}`, details);
  }

  static warn(message: string, details?: LogDetails) {
    console.warn(`[WARN] ${details?.timestamp || new Date().toISOString()} - ${message}`, details);
  }

  static error(message: string, details?: LogDetails) {
    console.error(`[ERROR] ${details?.timestamp || new Date().toISOString()} - ${message}`, details);
  }
}
