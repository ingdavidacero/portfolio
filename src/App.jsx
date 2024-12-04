import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/portfolio/sobre-mi" element={<About />} />
          <Route path="/portfolio/proyectos" element={<Projects />} />
          <Route path="/portfolio/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
