"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_PASSWORD,
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_VALUE,
} from "@/lib/adminAuth";

export async function adminLogin(formData: FormData) {
  const password = formData.get("password") as string | null;
  if (password !== ADMIN_PASSWORD) {
    return { error: "Invalid password" };
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, ADMIN_SESSION_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });

  redirect("/admin");
}

export async function adminLogout() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
  redirect("/admin/login");
}
