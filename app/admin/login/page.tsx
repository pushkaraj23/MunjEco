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
      <div className="w-full max-w-md border border-border bg-background-alt p-8 shadow-elevated">
        <div className="mb-6 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center border border-primary/40 bg-primary/5">
            <Lock className="h-6 w-6 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-center font-heading text-2xl font-semibold tracking-tight text-foreground">
          Admin Login
        </h1>
        <p className="mt-2 text-center text-sm text-foreground-muted">
          Enter your password to access the admin panel
        </p>

        <form action={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-foreground-muted"
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
              className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/60 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {error && (
            <p className="border border-accent/40 bg-accent/5 px-4 py-2 text-sm text-foreground">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary px-4 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.26em] text-white transition-all hover:bg-primary-dark disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
