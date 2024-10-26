import z from "zod";

export const userAuthSchema = z.object({
  name: z.string().min(1, "User name is required!"),
  surname: z.string().min(1, "Surname is required!"),
  email: z.string().email().min(1, "Email is required!"),
  businessName: z.string().min(1, "Business Name is required!"),
  ceoName: z.string().min(1, "Ceo Name is required!"),
  country: z.string().min(1, "Country is required!"),
  country: z.string().min(1, "Country is required!"),
});

export type TUserAuthSchema = z.infer<typeof userAuthSchema>;
