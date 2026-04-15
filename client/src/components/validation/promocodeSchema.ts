import { z } from "zod";

export const promocodeSchema = z.object({
    promocode: z.string()
        .trim()
        .min(6, { message: "Promocode must be at least 6 characters." })
        .max(8, { message: "Promocode cannot exceed 8 characters." })
        .regex(/^[a-zA-Z0-9\-]+$/, { 
            message: "Only Latin letters and numbers are allowed." 
        })
        
});