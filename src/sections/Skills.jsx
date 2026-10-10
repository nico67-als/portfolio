import Card from '../components/Card'
import Section from '../components/Section'
import { skillGroups } from '../data/skills'

function Skills() {
  return (
    <Section
      id="competences"
      title="Compétences"
      intro="Les technologies que j’utilise, et les projets qui le prouvent."
      alt
    >
      <ul className="grid gap-4 lg:grid-cols-2 lg:gap-6">
        {skillGroups.map((group) => (
          <Card as="li" key={group.title} className="p-5 lg:p-6">
            <h3 className="text-xl font-semibold">{group.title}</h3>
            <ul className="mt-4 space-y-3.5 lg:mt-5">
              {group.items.map(({ name, proof, icon: Icon }) => (
                <li key={name} className="flex items-start gap-3">
                  {Icon && (
                    <Icon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-primary"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="leading-snug font-semibold">{name}</p>
                    <p className="mt-0.5 text-sm text-muted">{proof}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </ul>
    </Section>
  )
}

export default Skills
