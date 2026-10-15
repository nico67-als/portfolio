import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Section from '../components/Section'
import { filters, projects } from '../data/projects'

function Projects() {
  const [filter, setFilter] = useState('Tous')
  // Projet affiché dans la fiche (null : fiche fermée)
  const [selected, setSelected] = useState(null)

  const visibleProjects =
    filter === 'Tous'
      ? projects
      : projects.filter((project) => project.tags.includes(filter))

  return (
    <Section
      id="projets"
      title="Projets"
      intro="Sur le site de la photographe Nina Carducci, l’image principale mettait 16,2 s à s’afficher : je l’ai ramenée à 0,7 s et j’ai porté les quatre scores Lighthouse à 100/100."
    >
      <div className="flex flex-wrap gap-2">
        {filters.map((label) => (
          <button
            key={label}
            type="button"
            aria-pressed={label === filter}
            onClick={() => setFilter(label)}
            className={`h-11 rounded-full border-[1.5px] border-primary px-4 text-sm font-semibold transition-colors lg:px-[18px] ${
              label === filter
                ? 'bg-primary text-white'
                : 'bg-surface text-primary hover:bg-primary-soft'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-6">
        {visibleProjects.map((project) => (
          <li key={project.id} className="motion-safe:animate-fade-in">
            <ProjectCard
              project={project}
              onOpen={() => setSelected(project)}
            />
          </li>
        ))}
      </ul>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </Section>
  )
}

export default Projects
