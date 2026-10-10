function Card({ as = 'div', className = '', ...props }) {
  const Tag = as

  return (
    <Tag
      className={`rounded-xl border border-border bg-surface p-6 shadow-sm ${className}`}
      {...props}
    />
  )
}

export default Card
