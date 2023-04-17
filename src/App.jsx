import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Sect1 from './components/sect1/Sect1'
import Sect2 from './components/sect2/Sect2'
import Footer from './components/footer/Footer.jsx'
import Certificaciones from './components/sect3/Certificaciones.jsx'
import Empresas from './components/empresas/Empresas.jsx'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <Nav />
      <Home />
      <Sect1 />
      <Sect2 />
      <Empresas />
      <Certificaciones />
      <Footer />
    </div>
  )
}

export default App
