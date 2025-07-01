import { useRef, useState } from "react"
import tootajadFailist from "../../data/tootajad.json"
import HaldaHome from "./HaldaHome";
import { Link } from "react-router-dom";

function HaldaTootajad() {
  const [tootajad, setTootajad] = useState(tootajadFailist.slice());
  const nimiRef = useRef();
  const [unikaalne, setUnikaalne] = useState(true);

  const lisaTootaja = () => {
    if (nimiRef.current.value === ""){
      alert("Tühja nimega töötajat ei saa lisada!");
      return;
    }
    tootajadFailist.push({"nimi" : nimiRef.current.value});
    setTootajad(tootajadFailist.slice());
    nimiRef.current.value = "";
  }

 const kustuta = (index) => {
    tootajadFailist.splice(index, 1);
    setTootajad(tootajadFailist.slice());
  }

  const kasUnikaalne = () => {
    const leitud = tootajadFailist.find(tootaja => tootaja.nimi === nimiRef.current.value);
    if (leitud === undefined){
      setUnikaalne(true);
    } else {
      setUnikaalne(false);
    }
  }

  return (
    <div>
      <HaldaHome />
      <label>Töötaja nimi</label> <br />
      <input onChange={kasUnikaalne} ref={nimiRef} type="text" /> <br />
      {unikaalne === false && <div className="red">Sellise nimega töötaja on juba olemas!</div>}
      <button disabled={unikaalne === false} onClick={lisaTootaja}>Lisa</button>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Nimi</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
          {tootajad.map((tootaja, index) => 
          <tr key = {tootaja.nimi}>
            <td>{index}</td>
            <td>{tootaja.nimi}</td>
            <td><button className="delete-button" onClick={() => kustuta(index)}>x</button></td>
            <td>
              <Link to={"/muuda-tootajad/" + index}>
                <button>Muuda</button>
              </Link>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaTootajad