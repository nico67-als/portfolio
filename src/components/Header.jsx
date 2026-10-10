import { sections } from '../data/navigation'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

const observedIds = ['accueil', ...sections.map(({ id }) => id)]

function Header() {
  const active = useActiveSection(observedIds)
  const scrolled = useScrolled()

  return (
    <header
      className={`sticky top-0 z-40 h-16 border-b bg-surface transition-colors lg:h-18 ${scrolled ? 'border-border' : 'border-transparent'}`}
    >
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4">
        <a
          id="logo"
          href="#accueil"
          className="flex items-center gap-2.5 lg:gap-3"
        >
          <Logo />
        </a>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {sections.map(({ id, label }) => {
              const current = id === active

              return (
                <li key={id}>
                  {/* Le libellé en gras masqué réserve la largeur : rien ne bouge
                      quand le lien devient actif. */}
                  <a
                    href={`#${id}`}
                    aria-current={current ? 'true' : undefined}
                    className="group inline-grid h-11 items-center px-3"
                  >
                    <span
                      aria-hidden="true"
                      className="invisible col-start-1 row-start-1 font-bold"
                    >
                      {label}
                    </span>
                    <span
                      className={`col-start-1 row-start-1 text-center underline-offset-8 ${
                        current
                          ? 'font-bold text-primary underline decoration-2'
                          : 'font-medium group-hover:underline'
                      }`}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <MobileMenu active={active} />
      </div>
    </header>
  )
}

export default Header
