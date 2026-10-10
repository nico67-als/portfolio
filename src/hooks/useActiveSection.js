import { useEffect, useState } from 'react'

// Renvoie l'id de la section qui croise le milieu de l'écran.
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)
  const key = ids.join()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )

    key.split(',').forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [key])

  return active
}
