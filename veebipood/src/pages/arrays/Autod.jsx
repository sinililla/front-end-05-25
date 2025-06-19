import { useState } from "react"
import ArraysHome from "./ArraysHome";
import autodFailist from "../../data/autod.json"

function Autod() {
  const [tooted, setTooted] = useState(autodFailist.slice());

  // sõnu võrdlen localeCompare
  // numbreid võrdlen üks miinus teine
  // objekte ei saa võrrelda

  function reset() {
    setTooted(autodFailist.slice());
  }

  function sorteeriAZ() {
    tooted.sort((a, b) => a.nimi.localeCompare(b.nimi));
    setTooted(tooted.slice());
  }

  function sorteeriKolmasTahtZA() {
    tooted.sort((a, b) => b.nimi[2].localeCompare(a.nimi[2]));
    setTooted(tooted.slice());
  }

  function filtreeriIgaLoppevad() {
    const vastus = autodFailist.filter(toode => toode.nimi.endsWith("i"));
    setTooted(vastus);
  }

  function filtreeriErSisaldavad() {
    const vastus = autodFailist.filter(toode => toode.nimi.includes("er"));
    setTooted(vastus);

  }

   function sorteeriHindKasv() {
    tooted.sort((a, b) => a.hind - b.hind);
    setTooted(tooted.slice());
  }

     function sorteeriHindKah() {
    tooted.sort((a, b) => b.hind - a.hind);
    setTooted(tooted.slice());
  }

  return (
    <div>
      <ArraysHome />
        <button onClick={reset}>Reset</button>
        <div>Toodete koguarv: {tooted.length} tk</div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriKolmasTahtZA}>Sorteeri kolmas täht Z-A</button>
        <button onClick={sorteeriHindKasv}>Sorteeri hind kasvavalt</button>
        <button onClick={sorteeriHindKah}>Sorteeri hind kahanevalt</button>
        <br />
        <button onClick={filtreeriIgaLoppevad}>Jäta alles i-ga lõppevad</button>
        <button onClick={filtreeriErSisaldavad}>Jäta alles er sisaldavad</button>
        {tooted.map(toode => 
        <div key={toode}>
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <div><img className="pilt" src={toode.pilt} alt="" /></div>
          </div>)}
    </div>
  )
}

export default Autod