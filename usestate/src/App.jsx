import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Kujundus from './pages/Kujundus'
import Ilmumine from './pages/Ilmumine'
import Muutmine from './pages/Muutmine'
import Telefon from './pages/Telefon'
import Hind from './pages/Hind'

function App() {
 
  return (
    <>
    <Link to="/ilmumine">
      <button>Ilmumine</button>
    </Link>

    <Link to="/kujundus">
      <button>Kujundus</button>
    </Link>

    <Link to="/muutmine">
      <button>Muutmine</button>
    </Link>

    <Link to="/telefon">
      <button>Telefon</button>
    </Link>

    <Link to="/hind">
      <button>Hind</button>
    </Link>

    <Routes>
      <Route path="*" element={<Ilmumine />} />
      <Route path="/ilmumine" element={<Ilmumine />} />
      <Route path="/kujundus" element={<Kujundus />} />
      <Route path="/muutmine" element={<Muutmine />} />
      <Route path="/telefon" element={<Telefon />} />
      <Route path="/hind" element={<Hind />} />
    </Routes>
    </>
  )
}

export default App
