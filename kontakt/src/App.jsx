import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Kontakt from './pages/Kontakt'
import Meist from './pages/Meist'
import Seaded from './pages/Seaded'
import { useState } from 'react'
import { useRef } from 'react'

function App() {
  const [ sisseLogitud, muudaSisseLogitud ] = useState("ei");
  const [ sonum, setSonum ] = useState("");
  const kasutajaNimiRef = useRef("Kaia");
  const paroolRef = useRef("123");
  
  
  function logiSisse(){
    if (paroolRef.current.value === "123"){
      muudaSisseLogitud("jah");
      setSonum("Oled sisselogitud! Tere " + kasutajaNimiRef.current.value + "!");
    } else {
      setSonum("Vale kasutajanimi või parool!");
    }
    
  }

  function logiV2lja(){
    muudaSisseLogitud("ei");
    setSonum("Oled väljalogitud!");
  }


  return (
    <>
      {sonum !== "" && <div className = 'loginstatus'>{sonum}</div>}
      {sisseLogitud === "ei" && <div className='login'>
        <label>Kasutajanimi</label> <br />
        <input ref={kasutajaNimiRef} type="text" /> <br />
        <label>Parool</label> <br />
        <input ref={paroolRef} type="password" />
      </div>}
      <br /> <br />
      {sisseLogitud === "ei" && <button onClick = {logiSisse}>Logi sisse</button>}
      {sisseLogitud === "jah" && <button onClick = {logiV2lja}>Logi välja</button>}
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="kontakt">
        <button>Kontakt</button>
      </Link>
      <Link to="meist">
        <button>Meist</button>
      </Link>
      <Link to="seaded">
        <button>Seaded</button>
      </Link>

      <Routes>

        <Route path = "/" element = {<Avaleht />} />
        <Route path = "kontakt" element = {<Kontakt />} />
        <Route path = "meist" element = {<Meist />} />
        <Route path = "seaded" element = {<Seaded />} />

      </Routes>
    </>
  )
}

export default App
