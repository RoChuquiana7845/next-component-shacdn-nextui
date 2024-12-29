import { z } from "zod";
import { phoneEcuadorRegex, urlRegex, validateImage } from "@/lib/zod-utils";

export const clientSchema = z.object({
  id: z.string().uuid({ message: "El ID debe ser un UUID válido" }),
  firstName: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  lastName: z
    .string()
    .min(3, { message: "El apellido debe tener al menos 3 caracteres" }),
  email: z
    .string()
    .email({ message: "Correo electrónico inválido" })
    .nonempty({ message: "El correo es requerido" }),
  phone: z
    .string()
    .regex(phoneEcuadorRegex, {
      message: "Número de teléfono inválido. Debe ser +593 o con código de área local",
    }),
  image: z
    .custom<File | null>((file) => file === null || file instanceof File, {
      message: "Debe ser un archivo válido o null",
    })
    .refine((file) => !file || validateImage(file), {
      message: "El archivo debe ser una imagen válida de no más de 5 MB",
    }),
  website: z
    .string()
    .regex(urlRegex, { message: "La URL no es válida" })
    .optional(),
  isActive: z.boolean(),
});

export type Client = z.infer<typeof clientSchema>;
