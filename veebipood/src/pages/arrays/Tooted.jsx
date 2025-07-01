import { useRef, useState } from "react";
import ArraysHome from "./ArraysHome";
import tootedFailist from "../../data/tooted.json"
import { Link } from "react-router-dom";


function Tooted() {
  const [joogid, setJoogid] = useState(tootedFailist.slice());
  const otsingRef = useRef();

  function reset() {
    setJoogid(tootedFailist.slice());
  }

  const sortAZ = () => {
    joogid.sort((a, b) => a.nimi.localeCompare(b.nimi));
    setJoogid(joogid.slice());
  }

  const sortZA = () => {
    joogid.sort((a, b) => b.nimi.localeCompare(a.nimi));
    setJoogid(joogid.slice());
  }

  const Kasvavalt = () => {
    joogid.sort((a, b) => a.nimi.length - b.nimi.length);
    setJoogid(joogid.slice());
  }

  const Kahanevalt = () => {
    joogid.sort((a, b) => b.nimi.length - a.nimi.length);
    setJoogid(joogid.slice());
  }

  const TeineTahtAZ = () => {
    joogid.sort((a, b) => a.nimi[1].localeCompare(b.nimi[1]));
    setJoogid(joogid.slice());
  }

  function Kuni6Tahte() {
    const vastus = tootedFailist.filter(jook => jook.nimi.length < 6);
    setJoogid(vastus);
  }

  function KuueTahelised() {
    const vastus = tootedFailist.filter(jook => jook.nimi.length === 6);
    setJoogid(vastus);
  }

  function lopusA() {
    const vastus = tootedFailist.filter(jook => jook.nimi.endsWith("a"));
    setJoogid(vastus);
  }

  function algusesY() {
    const vastus = tootedFailist.filter(jook => jook.nimi.endsWith("y"));
    setJoogid(vastus);
  }

  function paarisArvTahti() {
    const vastus = tootedFailist.filter(jook => jook.nimi.length % 2 === 0);
    setJoogid(vastus);
  }

  const otsi = () => {
    const vastus = tootedFailist.filter(jook => jook.nimi.includes(otsingRef.current.value));
    setJoogid(vastus);
  }

  const arvutaSumma = () => {
    let summa = 0;
    joogid.forEach(jook => summa += jook.hind);
    return summa.toFixed(2);
  }
  return (
    <div>
      <ArraysHome />
      <div>Kõigi jookide hind kokku: {arvutaSumma()} €</div>
      <label>Otsing:</label>
      <input ref={otsingRef} onChange={otsi} placeholder="Otsi toodet" type="text" />
      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={Kasvavalt}>Tähed kasvavalt</button>
      <button onClick={Kahanevalt}>Tähed kahanevalt</button>
      <button onClick={TeineTahtAZ}>Teine täht A-Z</button>
      {joogid.map((jook) => 
      <div className="article" key={jook.nimi}>
        <div>{jook.nimi}</div>
        <div>{jook.hind}</div>
        <Link to={"/toode/" + jook.nimi}>
          <button>Lisainfo</button>
        </Link>
        </div>)}
      <div>Tooteid on {joogid.length} tk.</div>
      <button onClick={Kuni6Tahte}>Kuni 6 tähelised</button>
      <button onClick={KuueTahelised}>Täpselt 6 tähelised</button>
      <button onClick={lopusA}>A-ga lõppevad</button>
      <button onClick={algusesY}>Y-ga lõppevad</button>
      <button onClick={paarisArvTahti}>Paarisarv tähti sisaldavad</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Tooted