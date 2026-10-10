import { LuArrowUpRight } from 'react-icons/lu'

// Lien ouvert dans un nouvel onglet, signalé par la flèche et un texte masqué.
function ExternalLink({ href, className = 'link font-semibold', children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center gap-1.5 ${className}`}
    >
      {children}
      <LuArrowUpRight aria-hidden="true" className="size-5 shrink-0" />
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  )
}

export default ExternalLink
