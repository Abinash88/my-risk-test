import z from "zod";

export const PaymentFormSchema = z.object({
  cardNumber: z.number().min(1, "Card number is required!"),
  firstName: z.string().min(1, "First Name is required!"),
  lastName: z.string().min(1, "Last Name is required!"),
  month: z.string().min(1, "Month is required!"),
  year: z.string().min(1, "Year is required!"),
  cvc: z.string().min(1, "Cvc is required!"),
});

export type TPaymentFormSchema = z.infer<typeof PaymentFormSchema>;
