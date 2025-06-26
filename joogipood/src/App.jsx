import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Lisa from './pages/Lisa'
import Halda from './pages/Halda'
function App() {
 

  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/lisa">
        <button>Lisa jook</button>
      </Link>

      <Link to="/halda">
        <button>Halda jooke</button>
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lisa" element={<Lisa />} />
        <Route path="/halda" element={<Halda />} />
      </Routes>
    </>
  )
}

export default App
