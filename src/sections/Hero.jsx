import { LuMapPin } from 'react-icons/lu'
import Button from '../components/Button'
import { contact } from '../data/contact'

function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="accueil-titre"
      className="pt-16 pb-0 md:pt-24 md:pb-0"
    >
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h1
          id="accueil-titre"
          className="text-4xl font-bold tracking-tight text-balance md:text-5xl"
        >
          Nicolas Grasser, développeur front-end React
        </h1>
        <p className="mt-4 text-lg text-muted md:mt-5">
          Des sites rapides, accessibles et bien référencés.
        </p>
        <p className="mt-4 flex items-center justify-center gap-2 text-muted">
          <LuMapPin aria-hidden="true" className="size-[18px] shrink-0" />
          {contact.location}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 md:mt-8">
          <Button href="#projets">Voir mes projets</Button>
          <Button href="#contact" variant="accent">
            Me contacter
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
