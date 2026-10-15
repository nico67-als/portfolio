// Section de la page : titre h2, introduction facultative,
// fond gris une section sur deux (alt).
function Section({ id, title, intro, alt = false, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titre`}
      className={`py-16 md:py-24 ${alt ? 'bg-surface-alt' : ''}`}
    >
      <div className="mx-auto max-w-5xl px-4">
        <div className="max-w-160 space-y-3">
          <h2 id={`${id}-titre`} className="text-3xl font-bold tracking-tight">
            {title}
          </h2>
          {intro && <p className="text-lg text-muted">{intro}</p>}
        </div>
        <div className="mt-8 lg:mt-10">{children}</div>
      </div>
    </section>
  )
}

export default Section
