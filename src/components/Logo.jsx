// Monogramme et nom ; l'élément parent (lien ou bloc) gère la disposition.
function Logo() {
  return (
    <>
      <span
        aria-hidden="true"
        className="flex size-10 items-center justify-center rounded-[10px] bg-primary text-[15px] font-extrabold text-white"
      >
        NG
      </span>
      <span className="font-semibold">Nicolas Grasser</span>
    </>
  )
}

export default Logo
