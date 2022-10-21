import { useState } from 'react'
import './App.css'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Sect1 from './components/sect1/Sect1'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <Nav />
      <Home />
      <Sect1 />
    </div>
  )
}

export default App
