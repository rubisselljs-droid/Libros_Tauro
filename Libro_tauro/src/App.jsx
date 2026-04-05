import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './layouts/header'
import { Menu } from './pages/menu'
import Blog from './pages/blog'
import Catalogo from './pages/catalogo'
import Foro from './pages/foro'
import Contacto from './pages/contacto'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/foro" element={<Foro />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
