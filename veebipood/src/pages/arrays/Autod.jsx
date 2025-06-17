import { useState } from "react"

function Autod() {
  const [tooted, setTooted] = useState(["Ferrari", "BMW", "Lamborghini", "Mercedes", "Audi", "Tesla"]);

  function reset() {
    setTooted(["Ferrari", "BMW", "Lamborghini", "Mercedes", "Audi", "Tesla"]);
  }

  function sorteeriAZ() {
    tooted.sort((a, b) => a.localeCompare(b));
    setTooted(tooted.slice());
  }

  function sorteeriKolmasTahtZA() {
    tooted.sort((a, b) => b[2].localeCompare(a[2]));
    setTooted(tooted.slice());
  }

  function filtreeriIgaLoppevad() {
    const vastus = tooted.filter(toode => toode.endsWith("i"));
    setTooted(vastus);
  }

  function filtreeriErSisaldavad() {
    const vastus = tooted.filter(toode => toode.includes("er"));
    setTooted(vastus);

  }

  return (
    <div>
        <button onClick={reset}>Reset</button>
        <div>Toodete koguarv: {tooted.length} tk</div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriKolmasTahtZA}>Sorteeri kolmas täht Z-A</button>
        <br />
        <button onClick={filtreeriIgaLoppevad}>Jäta alles i-ga lõppevad</button>
        <button onClick={filtreeriErSisaldavad}>Jäta alles er sisaldavad</button>
        {tooted.map(toode => <div key={toode}>{toode}</div>)}
    </div>
  )
}

export default Autod