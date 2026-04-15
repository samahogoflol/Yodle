import { z } from "zod";

const NAME_REGEX = /^[a-zA-Z\s\-']+$/; 
const PHONE_REGEX = /^\+?[\d\s\-\(\)]{10,20}$/; 
const MM_YY_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/;
const CVV_REGEX = /^\d{3,4}$/;

export const contactInfoSchema = z.object({
  firstName: z.string()
    .trim()
    .min(2, { message: "Please enter a valid first name (minimum 2 characters)." })
    .max(50, { message: "First name is too long." })
    .regex(NAME_REGEX, { message: "First name can contain only Latin letters, spaces, hyphens, and apostrophes." }),
  
  lastName: z.string()
    .trim()
    .min(2, { message: "Please enter a valid last name (minimum 2 characters)." })
    .max(50, { message: "Last name is too long." })
    .regex(NAME_REGEX, { message: "Last name can contain only Latin letters, spaces, hyphens, and apostrophes." }),
  
  email: z.string()
    .trim()
    .email({ message: "This doesn’t look like a valid email. Please check and try again." })
    .max(255),
  
  phoneNumber: z.string()
    .trim()
    .regex(PHONE_REGEX, {
      message: "Please enter a valid phone number."
    })
});

export const paymentInfoSchema = z.object({
  nameACard: z.string()
    .trim()
    .min(2, { message: "Please enter a valid name on card." })
    .max(50)
    .regex(NAME_REGEX, { message: "Name on card can contain only Latin letters, spaces, hyphens, and apostrophes." })
    .transform(val => val.toUpperCase()),
  
  cardNumber: z.string()
    .trim()
    .transform(val => val.replace(/\s+/g, "")) 
    .refine(val => /^\d+$/.test(val), { 
      message: "Card number must contain digits only." 
    })
    .refine(val => val.length >= 13 && val.length <= 19, { 
      message: "Card number must be between 13 and 19 digits." 
    }),
  
  expirationDate: z.string()
    .trim()
    .regex(MM_YY_REGEX, { message: "Please enter a valid expiration date (MM/YY)." })
    .refine((value) => {
      const [month, year] = value.split("/");
      const now = new Date();
      const userYear = Number(year);
      const userMonth = Number(month);
      const currentYear = Number(now.getFullYear().toString().slice(-2));
      const currentMonth = Number(String(now.getMonth() + 1).padStart(2, "0"));

      return !(userYear < currentYear || (userYear === currentYear && userMonth < currentMonth));
    }, { message: "This card has expired." }),
  
  cvv: z.string()
    .trim()
    .regex(CVV_REGEX, { message: "CVV must be 3 or 4 digits." })
});

export const fullCheckoutSchema = contactInfoSchema.merge(paymentInfoSchema);