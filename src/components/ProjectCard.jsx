import Badge from './Badge'
import Button from './Button'
import Card from './Card'
import ExternalLink from './ExternalLink'
import ProjectImage from './ProjectImage'

function ProjectCard({ project, onOpen }) {
  const { name, hook, tags, image, github, site, details } = project

  return (
    <Card
      as="article"
      className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg"
    >
      <ProjectImage
        name={image}
        sizes="(min-width: 1024px) 330px, (min-width: 640px) 50vw, 100vw"
        className="border-b border-border"
      />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-pretty text-muted">{hook}</p>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>

        {/* Fiche détaillée si le projet en a une, sinon les liens directs */}
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
          {details ? (
            <Button variant="outline" size="sm" onClick={onOpen}>
              Voir le détail<span className="sr-only"> : {name}</span>
            </Button>
          ) : (
            <>
              <ExternalLink href={github}>
                Code sur GitHub<span className="sr-only"> : {name}</span>
              </ExternalLink>
              {site && (
                <ExternalLink href={site}>
                  Voir le site<span className="sr-only"> : {name}</span>
                </ExternalLink>
              )}
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
