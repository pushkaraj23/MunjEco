"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ENQUIRIES_GATE_PASSWORD,
  ENQUIRIES_SESSION_COOKIE,
  ENQUIRIES_SESSION_VALUE,
} from "@/lib/enquiriesGateAuth";

export async function enquiriesGateLogin(formData: FormData) {
  const password = formData.get("password") as string | null;
  if (password !== ENQUIRIES_GATE_PASSWORD) {
    return { error: "Invalid password" };
  }

  const cookieStore = await cookies();
  cookieStore.set(ENQUIRIES_SESSION_COOKIE, ENQUIRIES_SESSION_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });

  const next = formData.get("redirect") as string | null;
  const safe =
    next && next.startsWith("/enquiries") && !next.startsWith("/enquiries/login")
      ? next
      : "/enquiries";
  redirect(safe);
}

export async function enquiriesGateLogout() {
  const cookieStore = await cookies();
  cookieStore.delete(ENQUIRIES_SESSION_COOKIE);
  redirect("/enquiries/login");
}
