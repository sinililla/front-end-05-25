import HaldaHome from "./HaldaHome"
import tootedFailist from "../../data/tooted.json"
import { useRef, useState } from "react"
import { Link } from "react-router-dom";

function HaldaTooted() {
  const [tooted, setTooted] = useState(tootedFailist);
  const [unikaalne, setUnikaalne] = useState(true);
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

  const kasUnikaalne = () => {
    const leitud = tootedFailist.find(jook => jook.nimi === toodeRef.current.value);
    if (leitud === undefined){
      setUnikaalne(true);
    } else {
      setUnikaalne(false);
    }
  }

  return (
    <div>
      <HaldaHome />
      <label>Toote nimi</label> <br />
      <input ref={toodeRef} onChange={kasUnikaalne} type="text" /> <br />
      {unikaalne === false && <div className="red">Duplikaati ei saa lisada!</div>}
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <button disabled={unikaalne === false} onClick={lisa}>Lisa</button>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Toode</th>
            <th>Hind</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
          {tooted.map((toode, index) =>
            <tr key = {toode.nimi}>
              <td>{index}</td>
              <td>{toode.nimi}</td>
              <td>{toode.hind}</td>
              <td><button className="delete-button" onClick={() => kustuta(index)}>x</button></td>
              <td>
                <Link to={"/muuda-tooted/" + index}>
                  <button>Muuda</button>
                </Link>
              </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaTooted