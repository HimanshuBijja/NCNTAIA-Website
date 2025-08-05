import { NextRequest, NextResponse } from "next/server";
import { formSchema } from "@/lib/zod/schema";
import feedback from "@/lib/db";

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);
    const result = formSchema.safeParse(body.formData);
    // console.log(result);
    if (!result.success) {
        return NextResponse.json({
            message: "Form submission failed",
            error: result.error,
        });
    }
    try {
        const response = await feedback.create({
            firstname: result.data.firstname,
            lastname: result.data.lastname,
            email: result.data.email,
            mobile: result.data.mobile,
            institution: result.data.institution,
            abstract: result.data.abstract,
            keywords: result.data.keywords,
            inperson: result.data.inperson,
            accept_terms: result.data.accept_terms,
        });
        return NextResponse.json({
            message: "Form submitted successfully",
            response,
        });
    } catch (error) {
        return NextResponse.json({
            message: "Form submission failed",
            error:
                error instanceof Error ? error.message : "Unknown error at db",
        });
    }
}
