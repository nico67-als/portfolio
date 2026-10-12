import { useEffect, useState } from 'react'

// Passe à vrai la première fois que l'élément entre dans l'écran.
export function useReveal(ref) {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return revealed
}
