import { z } from "zod";
import { passwordRegex, validateBirthDate } from "@/lib/zod-utils";

export const userSchema = z.object({
  id: z.string().uuid({ message: "El ID debe ser un UUID válido" }),
  firstName: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" }),
  lastName: z
    .string()
    .min(3, { message: "El apellido debe tener al menos 3 caracteres" }),
  email: z
    .string()
    .email({ message: "Correo electrónico inválido" }),
  password: z
    .string()
    .regex(passwordRegex, {
      message:
        "La contraseña debe contener al menos una mayúscula, una minúscula y un número",
    }),
  confirmPassword: z.string(),
  birthDate: z
    .string()
    .refine((val) => validateBirthDate(val), {
      message: "Debes ser mayor de 18 años",
    }),
  role: z.enum(["Admin", "User", "Guest"]),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

export type User = z.infer<typeof userSchema>;
