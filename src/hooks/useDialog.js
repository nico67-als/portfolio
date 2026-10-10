import { useEffect } from 'react'

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

// Complète un <dialog> natif ouvert avec showModal() (Échap, page inerte) :
// Tab boucle du premier au dernier élément, et un clic sur le fond peut le fermer.
export function useDialog(ref, { closeOnBackdrop = false } = {}) {
  useEffect(() => {
    const dialog = ref.current

    function trapFocus(event) {
      if (event.key !== 'Tab') return

      const items = [...dialog.querySelectorAll(FOCUSABLE)].filter(
        (el) => el.getClientRects().length > 0,
      )
      const first = items[0]
      const last = items.at(-1)

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    // Un clic sur le fond assombri a pour cible le <dialog> lui-même.
    function handleClick(event) {
      if (closeOnBackdrop && event.target === dialog) dialog.close()
    }

    dialog.addEventListener('keydown', trapFocus)
    dialog.addEventListener('click', handleClick)

    return () => {
      dialog.removeEventListener('keydown', trapFocus)
      dialog.removeEventListener('click', handleClick)
    }
  }, [ref, closeOnBackdrop])
}
