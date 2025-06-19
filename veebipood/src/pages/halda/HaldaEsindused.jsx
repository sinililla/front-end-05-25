import { useRef, useState } from "react"
import HaldaHome from "./HaldaHome"
import esindusedFailist from "../../data/esindused.json"

function HaldaEsindused() {
  const [esindused, setEsindused] = useState(esindusedFailist);
  const esindusRef = useRef();

  const kustuta = (index) => {
    esindusedFailist.splice(index, 1);
    setEsindused(esindusedFailist.slice());
  }

  const lisa = () => {
    if (esindusRef.current.value === "") {
      alert("Tühja esindust ei saa lisada!");
      return;
    }
    esindusedFailist.push(esindusRef.current.value);
    setEsindused(esindusedFailist.slice());
    esindusRef.current.value = "";
  }

  return (
    <div>
      <HaldaHome />
      <label>Esindus</label> <br />
      <input ref={esindusRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
      <button onClick={() => kustuta(0)}>Kustuta esimene</button>
      <button onClick={() => kustuta(1)}>Kustuta teine</button>
      <button onClick={() => kustuta(2)}>Kustuta kolmas</button>
      <button onClick={() => kustuta(3)}>Kustuta neljas</button>
      <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Esindus</th>
              <th>Kustuta</th>
            </tr>
          </thead>
          <tbody>
          {esindused.map((esindus, index) =>
            <tr key={esindus}>
              <td>{index}</td>
              <td>{esindus}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
          </tbody>
      </table>
    </div>
  )
}

export default HaldaEsindused