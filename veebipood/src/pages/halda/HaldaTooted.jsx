import HaldaHome from "./HaldaHome"
import tootedFailist from "../../data/tooted.json"
import { useRef, useState } from "react"

function HaldaTooted() {
  const [tooted, setTooted] = useState(tootedFailist);
  const toodeRef = useRef();
  const hindRef = useRef();

  const kustuta = (index) => {
    tootedFailist.splice(index, 1);
    setTooted(tootedFailist.slice());
  }

  const lisa = () => {
    tootedFailist.push({"nimi" : toodeRef.current.value, "hind" : hindRef.current.value});
    setTooted(tootedFailist.slice());
    toodeRef.current.value = "";
    hindRef.current.value = "";
  }

  return (
    <div>
      <HaldaHome />
      <label>Toote nimi</label> <br />
      <input ref={toodeRef} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <button onClick={lisa}>Lisa</button>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Toode</th>
            <th>Hind</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((toode, index) =>
            <tr key = {toode.nimi}>
              <td>{index}</td>
              <td>{toode.nimi}</td>
              <td>{toode.hind}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaTooted