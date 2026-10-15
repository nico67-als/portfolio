import { LuArrowUp } from 'react-icons/lu'
import { contact } from '../data/contact'

const link = 'link inline-flex min-h-11 items-center gap-1.5 font-semibold'

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 pt-5 pb-8 lg:h-24 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-0">
        <p className="order-last text-sm text-muted lg:order-first">
          © 2026 Nicolas Grasser
        </p>
        <ul className="flex gap-6">
          <li>
            <a href={contact.linkedin} className={link}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href={contact.github} className={link}>
              GitHub
            </a>
          </li>
        </ul>
        <a href="#accueil" className={`${link} self-start lg:self-auto`}>
          Retour en haut
          <LuArrowUp aria-hidden="true" className="size-5" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
