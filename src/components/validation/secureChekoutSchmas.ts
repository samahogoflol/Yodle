import { z } from "zod";

const PHONE_REGEX = /^\+?[\d\s\-\(\)]{9,20}$/; // цифри, +, -, пробіли, ()
const MM_YY_REGEX = /^(0[1-9]|1[0-2])\/\d{2}$/;
const CVV_REGEX = /^\d{3,4}$/;
const LETTERS_ONLY_REGEX = /^[A-Za-z]+$/;
const DIGITS_ONLY_REGEX = /^\d+$/;

export const contactInfoSchema = z.object({
  firstName: z.string()
    .trim()
    .min(2, { message: "Please enter a valid first name (minimum 2 characters)." })
    .regex(LETTERS_ONLY_REGEX, { message: "First name can contain letters only." }),
  
  lastName: z.string()
    .trim()
    .min(2, { message: "Please enter a valid last name (minimum 2 characters)." })
    .regex(LETTERS_ONLY_REGEX, { message: "Last name can contain letters only." }),
  
  email: z.string()
    .trim()
    .email({ message: "This doesn’t look like a valid email. Please check and try again." }),
  
  phoneNumber: z.string()
    .trim()
    .regex(PHONE_REGEX, {
      message: "This doesn’t look like a valid phone number. Only digits, spaces, '+', '-', and parentheses are allowed."
    })
});

export const paymentInfoSchema = z.object({
  nameACard: z.string()
    .trim()
    .min(2, { message: "Please enter a valid name a card (minimum 2 characters)." }),
  
  cardNumber: z.string()
    .trim()
    .min(13, { message: "Please enter a valid card number." })
    .regex(DIGITS_ONLY_REGEX, { message: "Card number must contain digits only." }),
  
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

      const isExpired = (userYear < currentYear || (userYear === currentYear && userMonth < currentMonth));
      return !isExpired;
    }, { message: "This card has expired." }),
  
  cvv: z.string()
    .trim()
    .regex(CVV_REGEX, { message: "CVV must be 3 or 4 digits." })
});
