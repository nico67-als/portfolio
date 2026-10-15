import { useEffect, useRef } from 'react'
import { LuArrowUpRight, LuX } from 'react-icons/lu'
import Badge from './Badge'
import Button from './Button'
import ProjectImage from './ProjectImage'

// Fiche projet : plein écran sur mobile, fenêtre centrée dès 768 px.
// showModal() gère Échap et rend la page derrière inactive.
function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const { name, tags, github, site, details } = project

  // Ouvre la fiche dès son affichage (sauf si elle est déjà ouverte)
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog.open) dialog.showModal()
  }, [])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="fiche-titre"
      onClose={onClose}
      className="m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain bg-surface p-0 text-ink backdrop:bg-ink/60 md:m-auto md:h-auto md:max-h-[90vh] md:max-w-200 md:rounded-2xl md:shadow-2xl"
    >
      <div className="sticky top-0 flex justify-end border-b border-border bg-surface p-3 md:border-0">
        <button
          type="button"
          aria-label="Fermer la fiche"
          onClick={() => dialogRef.current.close()}
          className="flex size-11 items-center justify-center rounded-lg border border-border-strong bg-surface"
        >
          <LuX aria-hidden="true" className="size-7" />
        </button>
      </div>

      <div className="px-4 pt-6 pb-10 md:px-12 md:pt-0">
        <h2 id="fiche-titre" className="text-3xl font-bold tracking-tight">
          {name}
        </h2>
        <p className="mt-3 max-w-150 text-lg text-pretty text-muted">
          {details.subtitle}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>

        {details.video && (
          <figure className="mt-8">
            <video
              src={`/videos/${details.video.file}.mp4`}
              poster={`/videos/${details.video.file}-poster.webp`}
              width="1280"
              height="720"
              controls
              muted
              preload="none"
              playsInline
              className="aspect-video w-full rounded-lg border border-border bg-ink"
            />
            <figcaption className="mt-2 text-sm text-pretty text-muted">
              {details.video.description}
            </figcaption>
          </figure>
        )}

        <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">
          {details.images.map(({ image, alt }) => (
            <ProjectImage
              key={image}
              name={image}
              alt={alt}
              sizes="(min-width: 768px) 344px, 100vw"
              className="rounded-lg border border-border"
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-x-10 md:gap-y-8">
          {details.sections.map(({ title, text }) => (
            <div key={title}>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-1.5 leading-relaxed text-pretty">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:gap-4 md:mt-10">
          {site && (
            <Button href={site} target="_blank" rel="noopener noreferrer">
              Voir le site
              <LuArrowUpRight aria-hidden="true" className="size-5" />
              <span className="sr-only"> (nouvel onglet)</span>
            </Button>
          )}
          <Button
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            variant={site ? 'outline' : 'primary'}
          >
            Voir le code sur GitHub
            <LuArrowUpRight aria-hidden="true" className="size-5" />
            <span className="sr-only"> (nouvel onglet)</span>
          </Button>
        </div>
      </div>
    </dialog>
  )
}

export default ProjectModal
