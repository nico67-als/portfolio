import Badge from './Badge'
import Button from './Button'
import Card from './Card'
import ExternalLink from './ExternalLink'
import ProjectImage from './ProjectImage'

function ProjectCard({ project, onOpenDetails }) {
  const { name, hook, tags, image, github, site, details } = project

  return (
    <Card
      as="article"
      className="flex h-full flex-col overflow-hidden transition-[box-shadow,border-color] focus-within:border-border-strong focus-within:shadow-lg hover:border-border-strong hover:shadow-lg motion-reduce:transition-none"
    >
      <ProjectImage
        src={image}
        label={name}
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

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
          {details ? (
            <Button
              variant="outline"
              size="sm"
              onClick={(event) => onOpenDetails(project, event.currentTarget)}
            >
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
