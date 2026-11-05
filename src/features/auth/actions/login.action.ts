"use server";

import { LoginSchema, type LoginInput } from "@/features/auth/schemas/login.schema";
import type { ActionResult } from "@/lib/types";

export async function loginAction(data: LoginInput): Promise<ActionResult<unknown>> {
  try {
    // Logic for authentication
    console.log("Logging in with:", data);

    return { ok: true, data: { message: "Success" } };
  } catch {
    return { ok: false, error: "An unexpected error occurred" };
  }
}