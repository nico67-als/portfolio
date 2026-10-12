import { useRef, useState } from 'react'
import { LuCheck } from 'react-icons/lu'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Section from '../components/Section'
import { filters, projects } from '../data/projects'

function Projects() {
  const [filter, setFilter] = useState('Tous')
  const [selected, setSelected] = useState(null)
  const triggerRef = useRef(null)

  const visible =
    filter === 'Tous'
      ? projects
      : projects.filter(({ tags }) => tags.includes(filter))

  function openDetails(project, trigger) {
    triggerRef.current = trigger
    setSelected(project)
  }

  // À la fermeture, le focus revient sur le bouton « Voir le détail » d'origine.
  function closeDetails() {
    setSelected(null)
    triggerRef.current?.focus()
  }

  return (
    <Section
      id="projets"
      title="Projets"
      intro="Sur le site de la photographe Nina Carducci, l’image principale mettait 16,2 s à s’afficher : je l’ai ramenée à 0,7 s et j’ai porté les quatre scores Lighthouse à 100/100."
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <div
          role="group"
          aria-label="Filtrer les projets par technologie"
          className="flex flex-wrap gap-2"
        >
          {filters.map((label) => {
            const active = label === filter

            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(label)}
                className={`inline-flex h-11 items-center gap-1.5 rounded-full border-[1.5px] border-primary px-4 text-sm font-semibold transition-colors lg:px-[18px] ${
                  active
                    ? 'bg-primary text-white'
                    : 'bg-surface text-primary hover:bg-primary-soft hover:text-primary-hover'
                }`}
              >
                {active && <LuCheck aria-hidden="true" className="size-4" />}
                {label}
              </button>
            )
          })}
        </div>
        <p
          aria-live="polite"
          className="shrink-0 text-sm font-semibold text-muted"
        >
          {visible.length} {visible.length > 1 ? 'projets' : 'projet'}
        </p>
      </div>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-6">
        {visible.map((project) => (
          <li key={project.id} className="motion-safe:animate-fade-in">
            <ProjectCard project={project} onOpenDetails={openDetails} />
          </li>
        ))}
      </ul>

      <ProjectModal project={selected} onClose={closeDetails} />
    </Section>
  )
}

export default Projects
