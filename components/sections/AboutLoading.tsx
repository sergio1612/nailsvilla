export function AboutLoading() {
  return (
    <section
      className="relative flex min-h-svh items-center overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
      aria-busy="true"
      aria-label="Loading about section"
    >
      <div className="container relative mx-auto w-full px-4 sm:px-6 lg:px-10 animate-pulse">
        <div className="mx-auto mb-12 flex max-w-2xl justify-center">
          <div className="h-10 w-44 rounded-full bg-primary/10" />
        </div>

        <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl border border-white/70 bg-white/60 p-6 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="mx-6 mt-6 sm:mx-0 sm:mt-0">
              <div className="mx-auto aspect-square w-full max-w-[280px] rounded-full bg-muted" />
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <div className="mx-auto h-12 w-64 rounded-lg bg-muted lg:mx-0" />
              <div className="mx-auto h-4 w-40 rounded bg-muted lg:mx-0" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-muted" />
                <div className="h-4 w-full rounded bg-muted" />
                <div className="mx-auto h-4 w-5/6 rounded bg-muted lg:mx-0" />
              </div>
            </div>
          </div>

          <div className="mt-8 h-px w-full bg-primary/10" />

          <div className="mt-8 grid gap-px bg-primary/10 sm:grid-cols-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="space-y-3 bg-white/48 p-5 sm:p-6">
                <div className="h-11 w-11 rounded-2xl bg-muted" />
                <div className="h-5 w-32 rounded bg-muted" />
                <div className="h-4 w-full rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
