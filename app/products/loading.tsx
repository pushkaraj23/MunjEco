export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-background-alt">
      <div className="border-b border-border/70 bg-background px-6 py-10 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="mx-auto max-w-6xl 2xl:max-w-7xl">
          <div className="h-3 w-24 animate-pulse rounded bg-foreground-muted/15" />
          <div className="mt-3 h-9 w-64 max-w-full animate-pulse rounded-md bg-foreground-muted/10" />
          <div className="mt-2 h-4 w-96 max-w-full animate-pulse rounded bg-foreground-muted/10" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl 2xl:max-w-7xl px-6 py-10 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border/60 bg-background shadow-card"
            >
              <div className="aspect-square animate-pulse bg-foreground-muted/10" />
              <div className="space-y-2 p-4">
                <div className="h-4 w-[75%] animate-pulse rounded bg-foreground-muted/15" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-foreground-muted/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
