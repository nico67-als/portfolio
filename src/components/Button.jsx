const variants = {
  primary:
    'border-primary bg-primary text-white hover:border-primary-hover hover:bg-primary-hover',
  accent:
    'border-accent bg-accent text-white hover:border-accent-hover hover:bg-accent-hover',
  outline:
    'border-primary text-primary hover:bg-primary-soft hover:text-primary-hover',
}

// Hauteur totale : 48 px (md) ou 44 px (sm), bordure comprise.
const sizes = {
  md: 'px-5 py-2.5',
  sm: 'px-4 py-2',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg border-2 font-semibold transition-colors'

// Rend un lien si `href` est fourni, sinon un bouton.
function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
