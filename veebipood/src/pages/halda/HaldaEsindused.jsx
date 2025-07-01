import { useRef, useState } from "react"
import HaldaHome from "./HaldaHome"
import esindusedFailist from "../../data/esindused.json"
import { Link } from "react-router-dom";

function HaldaEsindused() {
  const [esindused, setEsindused] = useState(esindusedFailist);
  const esindusRef = useRef();
  const aadressRef = useRef();
  const telRef = useRef();

  const [unikaalne, setUnikaalne] = useState(true);

  const kustuta = (index) => {
    esindusedFailist.splice(index, 1);
    setEsindused(esindusedFailist.slice());
  }

  const lisa = () => {
    if (esindusRef.current.value === "") {
      alert("Tühja esindust ei saa lisada!");
      return;
    }

    if (aadressRef.current.value === "") {
      alert("Tühja aadressi ei saa lisada!");
      return;
    }

    if (telRef.current.value === "") {
      alert("Tühja telefoninumbrit ei saa lisada!");
      return;
    }


    esindusedFailist.push({
      "keskus" : esindusRef.current.value, 
      "aadress" : aadressRef.current.value, 
      "tel" : telRef.current.value
    });
    setEsindused(esindusedFailist.slice());
    esindusRef.current.value = "";
    aadressRef.current.value = "";
    telRef.current.value = "";
  }

   

  const kasUnikaalne = () => {
 
    const leitud = esindusedFailist.find(esindus => esindus.keskus === esindusRef.current.value);
    if (leitud === undefined) {
      setUnikaalne(true);
    } else {
      setUnikaalne(false);
    }
  }

  return (
    <div>
      <HaldaHome />
      {unikaalne === false && <div className="red">Keskuse nimi on juba olemas!</div>}
      <label>Esindus</label> <br />
      <input onChange={kasUnikaalne} ref={esindusRef} type="text" /> <br />
      <label>Aadress</label> <br />
      <input ref={aadressRef} type="text" /> <br />
      <label>Telefon</label> <br />
      <input ref={telRef} type="number" /> <br />
      <button disabled={unikaalne === false} onClick={lisa}>Lisa</button> <br />
      <button onClick={() => kustuta(0)}>Kustuta esimene</button>
      <button onClick={() => kustuta(1)}>Kustuta teine</button>
      <button onClick={() => kustuta(2)}>Kustuta kolmas</button>
      <button onClick={() => kustuta(3)}>Kustuta neljas</button>
      <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Esinduse keskus</th>
              <th>Esinduse telefon</th>
              <th>Esinduse aadress</th>
              <th>Kustuta</th>
              <th>Muuda</th>
            </tr>
          </thead>
          <tbody>
          {esindused.map((esindus, index) =>
            <tr key={esindus.keskus}>
              <td>{index}</td>
              <td>{esindus.keskus}</td>
              <td>{esindus.tel}</td>
              <td>{esindus.aadress}</td>
              <td><button className="delete-button" onClick={() => kustuta(index)}>x</button></td>
              <td>
                <Link to={"/muuda-esindused/" + index}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>)}
          </tbody>
      </table>
    </div>
  )
}

export default HaldaEsindused