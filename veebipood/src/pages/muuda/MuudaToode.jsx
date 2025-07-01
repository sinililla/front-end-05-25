import { useRef } from "react";
import tootedFailist from "../../data/tooted.json"
import { useNavigate, useParams } from "react-router-dom"

function MuudaToode() {
  const { index } = useParams();
  const leitud = tootedFailist[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    if (nimiRef.current.value === ""){
      alert("Tühja nimega toodet ei saa lisada!");
      return;
    }
    if (hindRef.current.value === ""){
      alert("Tootel peab olema sisestatud hind!");
      return;
    }
    tootedFailist[index] = 
    {
      "nimi": nimiRef.current.value, 
      "hind": hindRef.current.value
    }

    navigate("/halda-tooted");
  }

  return (
    <>
    <label>Toote nimi</label> <br />
    <input ref={nimiRef} defaultValue={leitud.nimi} type="text" /> <br />
    <label>Toote hind</label> <br />
    <input ref={hindRef} defaultValue={leitud.hind} type="number" /> <br />
    <button onClick={muuda}>Muuda</button>
    
    </>
  )
}

export default MuudaToode