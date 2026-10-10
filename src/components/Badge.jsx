function Badge({ children }) {
  return (
    <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-sm font-medium text-primary-hover">
      {children}
    </span>
  )
}

export default Badge
