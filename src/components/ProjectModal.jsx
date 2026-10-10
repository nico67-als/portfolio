import { useEffect, useRef } from 'react'
import { LuArrowUpRight, LuX } from 'react-icons/lu'
import { useDialog } from '../hooks/useDialog'
import Badge from './Badge'
import Button from './Button'
import ProjectImage from './ProjectImage'

// Fiche projet : plein écran sur mobile, fenêtre de 800 px max dès 768 px.
function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const titleRef = useRef(null)

  useDialog(dialogRef, { closeOnBackdrop: true })

  useEffect(() => {
    const dialog = dialogRef.current
    if (project && !dialog.open) {
      dialog.showModal()
      titleRef.current.focus()
    }
  }, [project])

  const links = project
    ? [
        project.site && { label: 'Voir le site', href: project.site },
        { label: 'Voir le code sur GitHub', href: project.github },
      ].filter(Boolean)
    : []

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="fiche-titre"
      onClose={onClose}
      className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain bg-surface p-0 text-ink backdrop:bg-ink/60 md:m-auto md:h-auto md:max-h-[90vh] md:max-w-200 md:rounded-2xl md:shadow-2xl"
    >
      {project && (
        <div className="min-h-full">
          {/* Barre fixe en mobile ; en desktop seul le × reste visible en haut à droite. */}
          <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-surface px-4 md:h-0 md:items-start md:justify-end md:border-0 md:bg-transparent">
            <p className="text-sm font-semibold text-muted md:sr-only">
              Fiche projet
            </p>
            <button
              type="button"
              aria-label="Fermer la fiche"
              onClick={() => dialogRef.current.close()}
              className="flex size-11 items-center justify-center rounded-lg border border-border-strong bg-surface md:mt-4"
            >
              <LuX aria-hidden="true" className="size-7" />
            </button>
          </div>

          <div className="px-4 pt-8 pb-10 md:px-12 md:pt-10">
            <h2
              ref={titleRef}
              id="fiche-titre"
              tabIndex={-1}
              className="text-3xl font-bold tracking-tight focus:outline-none md:pr-14"
            >
              {project.name}
            </h2>
            <p className="mt-3 max-w-150 text-lg text-pretty text-muted">
              {project.details.subtitle}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">
              {project.details.images.map(({ src, alt }) => (
                <ProjectImage
                  key={alt}
                  src={src}
                  alt={alt}
                  label={alt}
                  className="rounded-lg border border-border"
                />
              ))}
            </div>

            <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-x-10 md:gap-y-8">
              {project.details.sections.map(({ title, text }) => (
                <div key={title}>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-pretty">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:gap-4 md:mt-10">
              {links.map(({ label, href }, index) => (
                <Button
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={index === 0 ? 'primary' : 'outline'}
                >
                  {label}
                  <LuArrowUpRight aria-hidden="true" className="size-5" />
                  <span className="sr-only"> (nouvel onglet)</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}

export default ProjectModal
