import { useRef, useState } from "react"
import tootajadFailist from "../../data/tootajad.json"
import HaldaHome from "./HaldaHome";

function HaldaTootajad() {
  const [tootajad, setTootajad] = useState(tootajadFailist.slice());
  const nimiRef = useRef();

  const lisaTootaja = () => {
    tootajadFailist.push({"nimi" : nimiRef.current.value});
    setTootajad(tootajadFailist.slice());
    nimiRef.current.value = "";
  }

 const kustuta = (index) => {
    tootajadFailist.splice(index, 1);
    setTootajad(tootajadFailist.slice());
  }

  return (
    <div>
      <HaldaHome />
      <label>Töötaja nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={lisaTootaja}>Lisa</button>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Nimi</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {tootajad.map((tootaja, index) => 
          <tr key = {tootaja.nimi}>
            <td>{index}</td>
            <td>{tootaja.nimi}</td>
            <td><button onClick={() => kustuta(index)}>x</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaTootajad