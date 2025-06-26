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
import HaldaHome from './pages/halda/HaldaHome'
import HaldaTooted from './pages/halda/HaldaTooted'
import HaldaTootajad from './pages/halda/HaldaTootajad'
import HaldaKasutajad from './pages/halda/HaldaKasutajad'
import HaldaHinnad from './pages/halda/HaldaHinnad'
import HaldaEsindused from './pages/halda/HaldaEsindused'
import HaldaAutod from './pages/halda/HaldaAutod'
import MuudaToode from './pages/muuda/MuudaToode'
import MuudaTootaja from './pages/muuda/MuudaTootaja'
import MuudaKasutaja from './pages/muuda/MuudaKasutaja'
import MuudaHind from './pages/muuda/MuudaHind'
import MuudaEsindus from './pages/muuda/MuudaEsindus'
import MuudaAuto from './pages/muuda/MuudaAuto'
import YksToode from './pages/yks/YksToode'
import YksTootaja from './pages/yks/YksTootaja'
import YksKasutaja from './pages/yks/YksKasutaja'
import YksHind from './pages/yks/YksHind'
import YksEsindus from './pages/yks/YksEsindus'
import YksAuto from './pages/yks/YksAuto'


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

          <Route path="/halda-home" element={ <HaldaHome /> } />
          <Route path="/halda-autod" element={ <HaldaAutod /> } />
          <Route path="/halda-esindused" element={ <HaldaEsindused /> } />
          <Route path="/halda-hinnad" element={ <HaldaHinnad /> } />
          <Route path="/halda-kasutajad" element={ <HaldaKasutajad /> } />
          <Route path="/halda-tootajad" element={ <HaldaTootajad /> } />
          <Route path="/halda-tooted" element={ <HaldaTooted /> } />

          <Route path="/muuda-autod" element={ <MuudaAuto /> } />
          <Route path="/muuda-esindused" element={ <MuudaEsindus /> } />
          <Route path="/muuda-hinnad" element={ <MuudaHind /> } />
          <Route path="/muuda-kasutajad" element={ <MuudaKasutaja /> } />
          <Route path="/muuda-tootajad" element={ <MuudaTootaja /> } />
          <Route path="/muuda-tooted" element={ <MuudaToode /> } />

          <Route path="/auto/:mark" element={ <YksAuto /> } />
          <Route path="/esindus/:pood" element={ <YksEsindus /> } />
          <Route path="/hind/:index" element={ <YksHind /> } />
          <Route path="/kasutaja" element={ <YksKasutaja /> } />
          <Route path="/tootaja" element={ <YksTootaja /> } />
          <Route path="/toode" element={ <YksToode /> } />

          <Route path="/*" element={ <NotFound /> } /> 
        </Routes>
        
    </>
  )
}

export default App
