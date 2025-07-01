import { useRef, useState } from "react";
import ArraysHome from "./ArraysHome";
import tootajadFailist from "../../data/tootajad.json"
import { Link } from "react-router-dom";

function Tootajad() {
  const [tootajad, setTootajad] = useState(tootajadFailist.slice());
  const otsingRef = useRef();

  const sortAZ = () => {
    tootajad.sort((a, b) => a.nimi.localeCompare(b.nimi));
    setTootajad(tootajad.slice());
  }

  const sortZA = () => {
    tootajad.sort((a, b) => b.nimi.localeCompare(a.nimi));
    setTootajad(tootajad.slice());
  }

  const sortKasvavalt = () => {
    tootajad.sort((a, b) => a.nimi.length - b.nimi.length);
    setTootajad(tootajad.slice());
  }

  const sortKahanevalt = () => {
    tootajad.sort((a, b) => b.nimi.length - a.nimi.length);
    setTootajad(tootajad.slice());
  }

  const teineTahtAZ = () => {
    tootajad.sort((a, b) => a.nimi[1].localeCompare(b.nimi[1]));
    setTootajad(tootajad.slice());
  }
  // sorteerib sõnade arvu järgi, leidsin internetist
  const sonadeArv = () => {
    // tootajad.sort((a, b) => a.trim().split(/\s+/).length - b.trim().split(/\s+/).length);
     tootajad.sort((a, b) => a.nimi.trim().split(" ").length - b.nimi.trim().split(" ").length);
    setTootajad(tootajad.slice());
  }

  function reset() {
    setTootajad(tootajadFailist);
  }

  function kolmTahte() {
    const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.length === 3);
    setTootajad(vastus);
  }

  function rohkemKui5Tahte() {
    const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.length > 5);
    setTootajad(vastus);
  }

  function sisaldabAi() {
    const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.includes("ai"));
    setTootajad(vastus);
  }

  function neljasTahtI() {
    const vastus = tootajadFailist.filter(tootaja => tootaja.nimi[3] === "i");
    setTootajad(vastus);
  }

  function algabM() {
    const vastus = tootajadFailist.filter(tootaja => tootaja.nimi[0] === "M");
    setTootajad(vastus);
  }

  function paarisArvTahti() {
    const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.length % 2 === 0);
    setTootajad(vastus);
  }

  const otsi = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.nimi.includes(otsingRef.current.value));
    setTootajad(vastus);
  }

  const mituTahte = () => {
    let summa = 0;
    tootajadFailist.forEach(tootaja => summa += tootaja.nimi.length);
    return summa;
  }

  return (
    <div>
      <ArraysHome />
      <div>Töötajate nimedes tähti kokku: {mituTahte()}</div>
      <label>Otsing:</label>
      <input ref={otsingRef} onChange={otsi} placeholder="Otsi töötajat" type="text" />
      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={sortKasvavalt}>Tähed kasvavalt</button>
      <button onClick={sortKahanevalt}>Tähed kahanevalt</button>
      <button onClick={teineTahtAZ}>Teine täht A-Z</button>
      <button onClick={sonadeArv}>Sorteeri sõnade arvu järgi</button>
      {tootajad.map(tootaja => 
      <div key={tootaja.nimi}>
        <div>{tootaja.nimi}</div>
        <div><Link to={"/tootaja/" + tootaja.nimi}>
            <button>Vt lähemalt</button>
          </Link></div>
        </div>)}
      <button onClick={kolmTahte}>Filtreeri täpselt 3 tähelised</button>
      <button onClick={rohkemKui5Tahte}>Rohkem kui 5 tähelised</button>
      <button onClick={sisaldabAi}>"Ai" lühendit sisaldavad</button>
      <button onClick={neljasTahtI}>Kellel on neljas täht "i"</button>
      <button onClick={algabM}>"M" tähega algavad</button>
      <button onClick={paarisArvTahti}>Paarisarv tähti</button>
      <button onClick={reset}>Reset</button>
      <div>Kogus: meil on {tootajad.length} töötajat</div>
    </div>
  )
}

export default Tootajad