import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht'
import Tagasiside from './pages/Tagasiside'
import TagasisideAndjad from './pages/TagasisideAndjad'
import Tegevused from './pages/Tegevused'
import Kasutajad from './pages/Kasutajad'


function App() {


  return (
    <>
      <Link to="/">
        <button>Avaleht</button>
      </Link>

      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>

      <Link to="/andjad">
        <button>Tagasiside Andjad</button>
      </Link>

      <Link to="/tegevused">
        <button>Tegevused</button>
      </Link>

      <Link to="/kasutajad">
        <button>Kasutajad</button>
      </Link>


      <Routes>
        <Route path="/" element={<Avaleht />} />
        <Route path="/tagasiside" element={<Tagasiside />} />
        <Route path="/andjad" element={<TagasisideAndjad />} />
        <Route path="/tegevused" element={<Tegevused />} />
        <Route path="/kasutajad" element={<Kasutajad />} />

      </Routes>
    </>
  )
}

export default App
