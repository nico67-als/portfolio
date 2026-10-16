import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { sections } from '../data/navigation'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 lg:h-18">
        <a href="#accueil" className="flex items-center gap-2.5 lg:gap-3">
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-[10px] bg-primary text-[15px] font-extrabold text-white"
          >
            NG
          </span>
          <span className="font-semibold">Nicolas Grasser</span>
        </a>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
          className="flex size-11 items-center justify-center rounded-lg border border-border-strong lg:hidden"
        >
          {open ? (
            <LuX aria-hidden="true" className="size-6" />
          ) : (
            <LuMenu aria-hidden="true" className="size-6" />
          )}
        </button>

        <nav
          id="menu"
          aria-label="Navigation principale"
          className={`${open ? 'block' : 'hidden'} absolute inset-x-0 top-full border-b border-border bg-surface shadow-lg lg:static lg:block lg:border-0 lg:shadow-none`}
        >
          <ul className="mx-auto max-w-5xl divide-y divide-border px-4 pb-2 lg:flex lg:divide-y-0 lg:p-0">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center text-lg font-semibold underline-offset-8 transition-colors hover:text-primary hover:underline lg:h-11 lg:min-h-0 lg:px-3 lg:text-base lg:font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
