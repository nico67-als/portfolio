import Section from '../components/Section'

function About() {
  return (
    <Section id="a-propos" title="À propos">
      <div className="max-w-160 space-y-4 leading-relaxed text-pretty">
        <p className="text-lg leading-normal font-medium">
          Je suis Nicolas Grasser, développeur front-end React, avec un goût
          particulier pour les sites rapides, accessibles et bien référencés.
        </p>
        <p>
          Après un DUT GEA, j’ai été analyste image pendant cinq ans dans
          l’Armée de l’air. Depuis l’adolescence, c’est moi qu’on appelle quand
          un ordinateur fait des siennes.
        </p>
        <p>
          Je me suis reconverti dans le développement web avec OpenClassrooms,
          parce que j’aime voir le résultat de mon travail&nbsp;: un site en
          ligne qui aide une entreprise à se développer.
        </p>
        <p>
          Je travaille avec React, Redux Toolkit et JavaScript. Ma
          spécialité&nbsp;: la performance, l’accessibilité et le SEO.
        </p>
        <p>
          Mes cinq opérations extérieures m’ont rendu adaptable&nbsp;:
          j’apprends vite et je livre un travail soigné, quelles que soient les
          conditions.
        </p>
        <p>
          Je travaille avec rigueur et en autonomie&nbsp;: je planifie en
          sprints, je teste avant de livrer et je documente mes choix. Pour moi,
          un site réussi est un site que tout le monde peut utiliser,
          rapidement.
        </p>
        <p className="font-semibold">
          Je recherche un poste de développeur front-end React dans une PME, à
          Strasbourg ou en Alsace, où mon travail aura un impact direct.
          J’aimerais y progresser au sein d’une équipe, puis évoluer vers le
          full-stack.
        </p>
      </div>
    </Section>
  )
}

export default About
