import './App.css'
import { Route, Routes } from "react-router-dom"
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import LisaToode from './pages/LisaToode'
import Kinkekaart from './pages/Kinkekaart'
import Esindused from './pages/arrays/Esindused'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'
import ArraysHome from './pages/arrays/ArraysHome'
import Autod from './pages/arrays/Autod'
import Hinnad from './pages/arrays/Hinnad'
import Kasutajad from './pages/arrays/Kasutajad'
import Tootajad from './pages/arrays/Tootajad'
import Tooted from './pages/arrays/Tooted'


function App() {
  

  return (
    <>
        <Menu/>
        
        <Routes>
          <Route path="/" element={ <Avaleht /> } />
          <Route path="/ostukorv" element={ <Ostukorv /> } />
          <Route path="/lisa-toode" element={ <LisaToode />} />
          <Route path="/osta-kinkekaart" element={ <Kinkekaart /> } />
          <Route path="/seaded" element={ <Seaded /> } />
          <Route path="/kalkulaator" element={< Kalkulaator />} />

          <Route path="/arrays-home" element={ <ArraysHome /> } />
          <Route path="/autod" element={ <Autod /> } />
          <Route path="/esindused" element={ <Esindused /> } />
          <Route path="/hinnad" element={ <Hinnad /> } />
          <Route path="/kasutajad" element={ <Kasutajad /> } />
          <Route path="/tootajad" element={ <Tootajad /> } />
          <Route path="/tooted" element={ <Tooted /> } />

          <Route path="/*" element={ <NotFound /> } /> 
        </Routes>
        
    </>
  )
}

export default App
