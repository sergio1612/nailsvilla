export function GalleryLoading() {
  return (
    <section
      className="relative overflow-hidden bg-background py-16 sm:py-20 xl:py-24"
      aria-busy="true"
      aria-label="Loading gallery section"
    >
      <div className="container relative mx-auto animate-pulse px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="mb-10 text-center sm:mb-16">
          <div className="mx-auto mb-6 h-10 w-36 rounded-full bg-primary/10" />
          <div className="mx-auto mb-5 h-12 w-72 max-w-full rounded-lg bg-muted" />
          <div className="mx-auto h-4 w-full max-w-2xl rounded bg-muted" />
        </div>

        <div className="mx-auto mb-6 h-4 w-64 rounded bg-muted sm:mb-8" />

        {/* Mobile carousel skeleton */}
        <div className="-mx-4 flex gap-4 overflow-hidden px-4 sm:hidden">
          {[0, 1].map((item) => (
            <div
              key={item}
              className="aspect-4/5 w-[85vw] max-w-sm shrink-0 rounded-3xl bg-muted"
            />
          ))}
        </div>

        {/* Desktop grid skeleton */}
        <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="aspect-4/5 rounded-3xl bg-muted" />
          ))}
        </div>
      </div>
    </section>
  )
}
