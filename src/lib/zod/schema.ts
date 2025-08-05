import { z } from "zod";

export const formSchema = z.object({
    firstname: z.string().min(2, "First name must be at least 2 characters long"),
    lastname: z.string().min(2, "Last name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    mobile: z.string().min(10, "Mobile number must be at least 10 characters long"),
    institution: z.string().min(2, "Institution name must be at least 2 characters long"),
    abstract: z.string().min(1, "Please enter an abstract"),
    keywords: z.array(z.string().min(3, "Please enter at least 3 keywords").max(7, "Please enter at most 7 keywords")),
    inperson: z.boolean().optional(),
    accept_terms: z.boolean(),  
});