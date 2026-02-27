import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <h1 className="font-display text-4xl font-semibold text-carob">404</h1>
      <p className="mt-4 text-foreground-muted">Page not found</p>
      <Link
        href="/"
        className="mt-8 rounded-2xl bg-matcha px-6 py-3 font-semibold text-white shadow-card transition-all hover:shadow-elevated"
      >
        Back to Home
      </Link>
    </div>
  );
}
