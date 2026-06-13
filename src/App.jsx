import Cursor  from './components/Cursor'
import Navbar  from './components/Navbar'
import Hero    from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills  from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <div className="section-line" />
        <Profile />
        <div className="section-line" />
        <Projects />
        <div className="section-line" />
        <Skills />
        <div className="section-line" />
        <Contact />
      </main>
    </>
  )
}
