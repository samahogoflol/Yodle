import { z } from "zod";

export const searchInstructorSchema = z.object({
  sport: z
    .enum(["Skiing", "Snowboarding", "Skiing & Snowboarding"])
    .nullable()
    .refine(val => val !== null, {
      message: "Please select an activity type",
    }),

  state: z
    .string()
    .nullable()
    .refine(val => !!val, {
      message: "Please select a state",
    }),

  resort: z
    .string()
    .nullable()
    .refine(val => !!val, {
      message: "Please select a resort",
    }),

  date: z
    .date()
    .nullable()
    .refine(val => val !== null, {
      message: "Please select a date",
    }),
});


export type SearchInstructorForm = z.infer<typeof searchInstructorSchema>;