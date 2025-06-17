import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Kontakt from './pages/Kontakt'
import Meist from './pages/Meist'
import Seaded from './pages/Seaded'
import { useState } from 'react'
import { useRef } from 'react'
import Leht from './pages/Leht'
import Loader from './pages/Loader'
import { ToastContainer, toast } from 'react-toastify';
import Months from './pages/Months'
import Animals from './pages/Animals'
import Words from './pages/Words'

function App() {
  const [ sisseLogitud, muudaSisseLogitud ] = useState("ei");
  const kasutajaNimiRef = useRef("Kaia");
  const paroolRef = useRef("Parool123%");
  
  
  function logiSisse(){
    if (paroolRef.current.value.length < 8){
      toast.error("Liiga lühike parool!");
      return;
    }
// kõik väikesteks tähtedeks teisaldatuna on identne mis originaal (kontrollib kas kõik tähed on lowercaseis)
    if (paroolRef.current.value.toLowerCase() === paroolRef.current.value){
      toast.error("Parool peab sisaldama suurt tähte!");
      return;
    }
// sama aga uppercase
    if (paroolRef.current.value.toUpperCase() === paroolRef.current.value){
      toast.error("Parool peab sisaldama väikest tähte!");
      return;
    }

    if (paroolRef.current.value.includes("%") === false){
      toast.error("Parool peab sisaldama protsenti!");
      return;
    }

    if (paroolRef.current.value === "Parool123%"){
      muudaSisseLogitud("jah");
      toast.success("Oled sisselogitud! Tere " + kasutajaNimiRef.current.value + "!");
      return;
    }
    toast.error("Vale kasutajanimi või parool!");

    
  }

  function logiV2lja(){
    muudaSisseLogitud("ei");
    toast.success("Oled väljalogitud!");
  }


  return (
    <>
      <ToastContainer />
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

      <Link to="leht">
        <button>Leht</button>
      </Link>

       <Link to="loader">
        <button>Loader</button>
      </Link>

      <Link to="months">
        <button>Months</button>
      </Link>

        <Link to="animals">
        <button>Animals</button>
      </Link>

       <Link to="words">
        <button>Words</button>
      </Link>


      <Routes>

        <Route path = "/" element = {<Avaleht />} />
        <Route path = "kontakt" element = {<Kontakt />} />
        <Route path = "meist" element = {<Meist />} />
        <Route path = "seaded" element = {<Seaded />} />
        <Route path = "leht" element = {<Leht />} />
        <Route path = "loader" element = {<Loader />} />
        <Route path = "months" element = {<Months />} />
        <Route path = "animals" element = {<Animals />} />
        <Route path = "words" element = {<Words />} />

      </Routes>
    </>
  )
}

export default App
