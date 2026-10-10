// Sans marge intérieure : chaque usage choisit la sienne (la carte projet
// a une image bord à bord).
function Card({ as = 'div', className = '', ...props }) {
  const Tag = as

  return (
    <Tag
      className={`rounded-xl border border-border bg-surface shadow-sm ${className}`}
      {...props}
    />
  )
}

export default Card
