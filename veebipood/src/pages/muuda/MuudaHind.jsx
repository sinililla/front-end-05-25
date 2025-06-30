import { useNavigate, useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"
import { useRef } from "react";


function MuudaHind() {
  const { index } = useParams();
  const leitud = hinnadFailist[index];
  const hindRef = useRef();
  const sonanaRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {

    if (hindRef.current.value === "") {
      alert("Tühja hinnaga ei saa lisada");
      return;
    }

    hinnadFailist[index] = 
      {
        "number" : Number(hindRef.current.value), 
        "sonana" : sonanaRef.current.value, 
      }
    
      navigate("/halda-hinnad");
  }

  return (
    <div>
      <label>Hind</label> <br />
      <input ref={hindRef} type="number" defaultValue={leitud.number}/> <br />
      <label>Sõnana</label> <br />
      <input ref={sonanaRef} type="text" defaultValue={leitud.sonana}/> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaHind