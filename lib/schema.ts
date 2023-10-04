import { z } from "zod"

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

// // export const FormDataSchema = z.object({
// //   name: z.string().nonempty("Name is required."),
// //   message: z
// //     .string()
// //     .nonempty("Message is required.")
// //     .min(6, { message: "Message must be at least 6 characters." }),
// // })

export const ContactFormSchema = z.object({
  firstName: z.string().nonempty("Fist name is required."),
  lastName: z.string().nonempty("Last name is required."),
  email: z.string().nonempty("Email is required.").email("Invalid email."),
  phone: z
    .string()
    .nonempty("Phone number is required.")
    .regex(phoneRegex, "Invalid phone number."),
  country: z.string().nonempty("Country is required."),
  city: z.string().nonempty("City is required."),
  postalCode: z.string().nonempty("Postal code is required."),
  message: z
    .string()
    .nonempty("Message is required.")
    .min(6, { message: "Message must be at least 6 characters." }),
})

export type ContactFormInputs = z.infer<typeof ContactFormSchema>
