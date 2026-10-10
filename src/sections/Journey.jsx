import { Fragment } from 'react'
import Section from '../components/Section'
import { timeline } from '../data/timeline'

// Frise alignée à gauche : dates dans une colonne de 200 px dès 1024 px.
function Journey() {
  return (
    <Section id="parcours" title="Parcours" alt>
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute top-3 bottom-3 left-[9px] w-0.5 bg-border-strong lg:left-[231px]"
        />
        <ol className="relative space-y-8 lg:space-y-10">
          {timeline.map(({ dates, role, org, text }) => (
            <li
              key={role}
              className="relative pl-10 lg:grid lg:grid-cols-[12.5rem_4rem_minmax(0,1fr)] lg:pl-0"
            >
              <p className="text-sm font-semibold text-muted lg:text-right lg:text-base">
                {dates.map(([label, dateTime], index) => (
                  <Fragment key={dateTime}>
                    {index > 0 && ' – '}
                    <time dateTime={dateTime}>{label}</time>
                  </Fragment>
                ))}
              </p>
              <span
                aria-hidden="true"
                className="absolute top-px left-0 size-5 rounded-full border-4 border-primary bg-surface lg:static lg:mt-0.5 lg:justify-self-center"
              />
              <div className="mt-1 max-w-150 lg:mt-0">
                <h3 className="text-xl font-semibold">{role}</h3>
                <p className="mt-1 font-medium text-muted">{org}</p>
                <p className="mt-2 leading-relaxed text-pretty">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}

export default Journey
