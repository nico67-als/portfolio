const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  accent: 'bg-accent text-white hover:bg-accent-hover',
  outline:
    'border-2 border-primary text-primary hover:bg-primary-soft hover:text-primary-hover',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold transition-colors'

// Rend un lien si `href` est fourni, sinon un bouton.
function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`

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
