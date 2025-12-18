import Header from './components/Header'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Experience />
        <Skills />
        <Education />
      </main>
      <Contact />
    </div>
  )
}

export default App
