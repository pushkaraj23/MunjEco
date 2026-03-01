"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/app/actions/adminAuth";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    setError(null);
    setIsSubmitting(true);
    try {
      const result = await adminLogin(formData);
      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch {
      // redirect() throws, so we only get here on error
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-3xl border border-almond bg-white/80 p-8 shadow-elevated backdrop-blur-xl">
        <div className="mb-8 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-matcha/20">
            <Lock className="h-7 w-7 text-matcha" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-center font-heading text-2xl font-semibold text-foreground">
          Admin Login
        </h1>
        <p className="mt-2 text-center text-sm text-foreground-muted">
          Enter your password to access the admin panel
        </p>

        <form action={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-foreground-muted"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              placeholder="Enter password"
              className="w-full rounded-xl border border-almond bg-white px-4 py-3 text-foreground placeholder:text-foreground-muted/60 outline-none transition-all focus:border-matcha focus:ring-2 focus:ring-matcha/30"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-chai/20 px-4 py-2 text-sm text-carob">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-matcha px-4 py-3 font-semibold text-white transition-all hover:bg-matcha/90 disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
