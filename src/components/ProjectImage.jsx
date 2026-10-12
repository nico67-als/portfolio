// Capture 16/9 en WebP, servie en 640 ou 960 px de large selon l'écran
// (fichiers dans public/images/projets).
function ProjectImage({ name, alt = '', sizes, className = '' }) {
  const base = `/images/projets/${name}`

  return (
    <img
      src={`${base}-960.webp`}
      srcSet={`${base}-640.webp 640w, ${base}-960.webp 960w`}
      sizes={sizes}
      alt={alt}
      width="960"
      height="540"
      loading="lazy"
      decoding="async"
      className={`aspect-video w-full object-cover ${className}`}
    />
  )
}

export default ProjectImage
