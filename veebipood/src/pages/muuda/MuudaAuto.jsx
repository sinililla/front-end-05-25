import { useNavigate, useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json"
import { useRef } from "react";

// Reacti erikood --> Hook
// 1. tuleb importida node_module-st siin failis
// 2. peab olema use- eesliidesega
// 3. kui ta loon, peavad sulud olema lõpus (ta peab olema funktsionaalne)
// 4. ta ei tohi olla funktsiooni sees loodud
// 5. ta ei tohi olla tingimuslikult loodud (if abiga)

function MuudaAuto() {
  const { index } = useParams();
  const leitud = autodFailist[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
     if (nimiRef.current.value === ""){
      alert("Tühja autot ei saa lisada!");
      return;
    }

    autodFailist[index] = 
    {
      "nimi" : nimiRef.current.value, 
      "hind" : hindRef.current.value, 
      "aktiivne" : aktiivneRef.current.checked, // current.value annab mulle 'on', olenemata kas on linnuke või mitte
      "pilt" : piltRef.current.value
    }

    navigate("/halda-autod");
  }

  return (
    <div>
      <input type="text" ref={nimiRef} defaultValue={leitud.nimi}/> <br />
      <input type="number" ref={hindRef} defaultValue={leitud.hind}/> <br />
      <input type="text" ref={piltRef} defaultValue={leitud.pilt}/> <br />
      <input type="checkbox" ref={aktiivneRef} defaultChecked={leitud.aktiivne}/> <br />
      
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaAuto