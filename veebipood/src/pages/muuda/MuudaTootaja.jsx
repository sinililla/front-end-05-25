import { useNavigate, useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"
import { useRef } from "react"


function MuudaTootaja() {
  const { index } = useParams();
  const leitud = tootajadFailist[index];
  const nimiRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    if (nimiRef.current.value === ""){
      alert("Tühja nime ei saa asendada!");
      return;
    }

    tootajadFailist[index] = 
    {
      "nimi" : nimiRef.current.value
    }

    navigate("/halda-tootajad/");
  }

  return (
    <>
      <label>Töötaja nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitud.nimi} type="text" /> <br />
      <button onClick={muuda}>Muuda</button>
    </>
  )
}

export default MuudaTootaja