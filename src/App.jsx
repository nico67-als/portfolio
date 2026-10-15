import Footer from './components/Footer'
import Header from './components/Header'
import About from './sections/About'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Journey from './sections/Journey'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

function App() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-50 focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-lg focus:bg-surface focus:px-4 focus:font-semibold focus:text-primary focus:underline focus:shadow-lg"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
