// Capture en WebP : le navigateur choisit la version 640 ou 960 px
// selon la place disponible (sizes).
function ProjectImage({ name, alt = '', sizes, className = '' }) {
  const path = `/images/projets/${name}`

  return (
    <img
      src={`${path}-960.webp`}
      srcSet={`${path}-640.webp 640w, ${path}-960.webp 960w`}
      sizes={sizes}
      alt={alt}
      width="960"
      height="540"
      loading="lazy"
      className={`aspect-video w-full object-cover ${className}`}
    />
  )
}

export default ProjectImage
