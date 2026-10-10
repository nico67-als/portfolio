import { useEffect, useRef, useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { sections } from '../data/navigation'
import { useDialog } from '../hooks/useDialog'
import Logo from './Logo'

const iconButton =
  'flex size-11 items-center justify-center rounded-lg border border-border-strong'

// Bouton menu et panneau plein écran, affichés sous 1024 px.
function MobileMenu({ active }) {
  const dialogRef = useRef(null)
  const buttonRef = useRef(null)
  const firstLinkRef = useRef(null)
  const targetRef = useRef(null)
  const [open, setOpen] = useState(false)

  useDialog(dialogRef)

  // Le panneau n'a plus lieu d'être en desktop : on le ferme si l'écran s'élargit.
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)')
    const closeOnDesktop = () => desktop.matches && dialogRef.current.close()
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  function openMenu() {
    dialogRef.current.showModal()
    firstLinkRef.current.focus()
    setOpen(true)
  }

  function closeMenu() {
    dialogRef.current.close()
  }

  // Le lien ferme d'abord le panneau : la page se débloque, puis défile.
  function goToSection(event, id) {
    event.preventDefault()
    targetRef.current = id
    closeMenu()
  }

  // Après × ou Échap, le focus revient sur le bouton menu ; après un lien,
  // il passe sur la section demandée.
  function handleClose() {
    setOpen(false)
    const target =
      targetRef.current && document.getElementById(targetRef.current)
    targetRef.current = null

    if (target) {
      target.scrollIntoView()
      target.focus({ preventScroll: true })
      history.pushState(null, '', `#${target.id}`)
    } else {
      buttonRef.current.focus()
    }
  }

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={openMenu}
        className={`${iconButton} lg:hidden`}
      >
        <LuMenu aria-hidden="true" className="size-6" />
      </button>

      <dialog
        ref={dialogRef}
        id="menu-mobile"
        aria-label="Menu"
        onClose={handleClose}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-surface p-0 text-ink transition-opacity duration-200 starting:opacity-0 motion-reduce:transition-none"
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-2.5">
            <Logo />
          </div>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={closeMenu}
            className={iconButton}
          >
            <LuX aria-hidden="true" className="size-7" />
          </button>
        </div>

        <nav aria-label="Navigation principale" className="px-4 py-6">
          <ul>
            {sections.map(({ id, label }, index) => {
              const current = id === active

              return (
                <li key={id} className="border-b border-border last:border-b-0">
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={`#${id}`}
                    aria-current={current ? 'true' : undefined}
                    onClick={(event) => goToSection(event, id)}
                    className={`flex min-h-16 items-center gap-2.5 text-xl ${current ? 'font-extrabold text-primary' : 'font-semibold'}`}
                  >
                    <span
                      className={
                        current
                          ? 'underline decoration-2 underline-offset-6'
                          : ''
                      }
                    >
                      {label}
                    </span>
                    {current && (
                      <span
                        aria-hidden="true"
                        className="text-sm font-medium text-muted"
                      >
                        · section en cours
                      </span>
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </dialog>
    </>
  )
}

export default MobileMenu
