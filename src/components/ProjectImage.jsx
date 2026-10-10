// Capture au format 16/9. Sans `src`, affiche un emplacement réservé décoratif.
function ProjectImage({ src, alt = '', label, className = '' }) {
  const box = `aspect-video w-full ${className}`

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width="1280"
        height="720"
        loading="lazy"
        className={`${box} object-cover`}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className={`${box} flex items-center justify-center bg-primary-soft p-4 text-center`}
    >
      <span className="text-lg font-semibold text-primary-hover">{label}</span>
    </div>
  )
}

export default ProjectImage
