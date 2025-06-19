import { useRef, useState } from "react"
import HaldaHome from "./HaldaHome"
import hinnadFailist from "../../data/hinnad.json"

function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());
  const hindRef = useRef();

  const lisa = () => {
    if (hindRef.current.value === "") {
      alert("Tühja hinda ei saa lisada!");
      return;
    }
    hinnadFailist.push(hindRef.current.value);
    setHinnad(hinnadFailist.slice());
    hindRef.current.value = "";
  }

  const kustuta = (index) => {
    hinnadFailist.splice(index, 1);
    setHinnad(hinnadFailist.slice());
  }

  

  return (
    <div>
      <HaldaHome />
      <label>Hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
      <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Hind</th>
              <th>Kustuta</th>
            </tr>
          </thead>
          <tbody>
          {hinnad.map((hind, index) =>
            <tr key={hind}>
              <td>{index}</td>
              <td>{hind}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
          </tbody>
      </table>
    </div>
  )
}

export default HaldaHinnad