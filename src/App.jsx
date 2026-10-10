import Badge from './components/Badge'
import Button from './components/Button'
import Card from './components/Card'

// Aperçu provisoire du design system, remplacé par les vraies sections en T10.
function App() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 px-4 py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Nicolas Grasser, développeur front-end React
        </h1>
        <p className="max-w-2xl text-lg text-muted">
          Des sites rapides, accessibles et bien référencés.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="#projets">Voir mes projets</Button>
          <Button href="#contact" variant="accent">
            Me contacter
          </Button>
          <Button variant="outline">Bouton secondaire</Button>
        </div>
      </header>

      <section className="rounded-xl bg-surface-alt p-6">
        <Card as="article" className="max-w-md space-y-3">
          <h2 className="text-xl font-semibold">Nina Carducci</h2>
          <p className="text-muted">
            100/100 sur les quatre scores Lighthouse.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>SEO</Badge>
            <Badge>Performance</Badge>
            <Badge>Accessibilité</Badge>
          </div>
          <a href="#projets" className="link">
            Voir le projet
          </a>
        </Card>
      </section>
    </main>
  )
}

export default App
