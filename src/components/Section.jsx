import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

// Le contenu apparaît en fondu à l'arrivée dans l'écran, sauf si l'utilisateur
// a demandé moins d'animations ; il reste toujours visible à l'impression.
const hidden = 'motion-safe:translate-y-4 motion-safe:opacity-0'

// Section de page : titre h2 relié par aria-labelledby, intro facultative,
// fond gris clair une section sur deux (`alt`).
function Section({ id, title, intro, alt = false, children }) {
  const contentRef = useRef(null)
  const revealed = useReveal(contentRef)

  return (
    <section
      id={id}
      aria-labelledby={`${id}-titre`}
      tabIndex={-1}
      className={`py-16 focus:outline-none md:py-24 ${alt ? 'bg-surface-alt' : ''}`}
    >
      <div
        ref={contentRef}
        className={`mx-auto max-w-5xl px-4 motion-safe:transition motion-safe:duration-500 motion-safe:ease-out print:translate-y-0 print:opacity-100 ${revealed ? '' : hidden}`}
      >
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
