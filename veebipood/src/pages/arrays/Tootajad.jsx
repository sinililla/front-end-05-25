import { useState } from "react";

function Tootajad() {
  const [tootajad, setTootajad] = useState(["Käsna-Kalle", "Patrick", "Sandy", "Kalmaari Kalmer","Hr Krabi", "Pärl", "Larry", "Gary", "Plankton", "Karen", "Stu", "Maiken", "Priit"]);

  const sortAZ = () => {
    tootajad.sort((a, b) => a.localeCompare(b));
    setTootajad(tootajad.slice());
  }

  const sortZA = () => {
    tootajad.sort((a, b) => b.localeCompare(a));
    setTootajad(tootajad.slice());
  }

  const sortKasvavalt = () => {
    tootajad.sort((a, b) => a. length - b.length);
    setTootajad(tootajad.slice());
  }

  const sortKahanevalt = () => {
    tootajad.sort((a, b) => b. length - a.length);
    setTootajad(tootajad.slice());
  }

  const teineTahtAZ = () => {
    tootajad.sort((a, b) => b[2].localeCompare(a[2]));
    setTootajad(tootajad.slice());
  }
  // sorteerib sõnade arvu järgi, leidsin internetist
  const sonadeArv = () => {
    tootajad.sort((a, b) => a.trim().split(/\s+/).length - b.trim().split(/\s+/).length);
    setTootajad(tootajad.slice());
  }

  function reset() {
    setTootajad(["Käsna-Kalle", "Patrick", "Sandy", "Kalmaari Kalmer","Hr Krabi", "Pärl", "Larry", "Gary", "Plankton", "Karen", "Stu", "Maiken"]);
  }

  function kolmTahte() {
    const vastus = tootajad.filter(tootaja => tootaja.length === 3);
    setTootajad(vastus);
  }

  function rohkemKui5Tahte() {
    const vastus = tootajad.filter(tootaja => tootaja.length > 5);
    setTootajad(vastus);
  }

  function sisaldabAi() {
    const vastus = tootajad.filter(tootaja => tootaja.includes("ai"));
    setTootajad(vastus);
  }

  function neljasTahtI() {
    const vastus = tootajad.filter(tootaja => tootaja[3] === "i");
    setTootajad(vastus);
  }

  function algabM() {
    const vastus = tootajad.filter(tootaja => tootaja[0] === "M");
    setTootajad(vastus);
  }

  function paarisArvTahti() {
    const vastus = tootajad.filter(tootaja => tootaja.length % 2 === 0);
    setTootajad(vastus);
  }

  return (
    <div>
      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={sortKasvavalt}>Tähed kasvavalt</button>
      <button onClick={sortKahanevalt}>Tähed kahanevalt</button>
      <button onClick={teineTahtAZ}>Teine täht A-Z</button>
      <button onClick={sonadeArv}>Sorteeri sõnade arvu järgi</button>
      {tootajad.map(tootaja => <div key={tootaja}>{tootaja}</div>)}
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