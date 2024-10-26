import z from "zod";

export const businessAuthRegister = z.object({
  name: z.string().min(1, "User name is required!"),
  surname: z.string().min(1, "Surname is required!"),
  email: z.string().email().min(1, "Email is required!"),
  businessName: z.string().min(1, "Business Name is required!"),
  ceoName: z.string().min(1, "Ceo Name is required!"),
  country: z.string().min(1, "Country is required!"),
  houseNo: z.string().optional(),
  streetName: z.string().optional(),
  town: z.string().optional(),
  city: z.string().optional(),
  zipCode: z.string().optional(),
  acceptedTerms: z.boolean().default(false),
});

export type TbusinessAuthRegister = z.infer<typeof businessAuthRegister>;

export const professionalAuthRegister = z.object({
  name: z.string().min(1, "User name is required!"),
  surname: z.string().min(1, "Surname is required!"),
  email: z.string().email().min(1, "Email is required!"),
  jobTitle: z.string().min(1, "Job title is required!"),
  currentCompany: z.string().min(1, "Current Company is required!"),
  referralCode: z.string().min(1, "Town is required!").optional(),
  acceptedTerms: z.boolean().default(false),
});

export type TprofessionalAuthRegister = z.infer<
  typeof professionalAuthRegister
>;

export const finishRegisterationSchema = z
  .object({
    password: z
      .string()
      .min(7, "Password must be minimum 7 character")
      .max(50, "Password should not more than 50 character"),
    confirmPassword: z
      .string()
      .min(7, "Password must be minimum 7 character")
      .max(50, "Password should not more than 50 character"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type TfinishRegisterationSchema = z.infer<
  typeof finishRegisterationSchema
>;
