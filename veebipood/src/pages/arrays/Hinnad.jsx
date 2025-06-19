import { useState } from "react"
import ArraysHome from "./ArraysHome";
import hinnadFailist from "../../data/hinnad.json";

function Hinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());

  function sorteeriKasvavalt() {
    hinnad.sort((a, b) => a - b );
    setHinnad(hinnad.slice()); //.slice() --> kustutab mälukoha (kust ta pärineb)
  } // miks siin on seda vaja? sest muidu uuendatakse 'hinnad' muutujat 'setHinnad' abil, pannes sisse 'hinnad'

  function sorteeriKahanevalt() {
     hinnad.sort((a, b) => b - a );
    setHinnad(hinnad.slice());
  }

  function filtreeriSuuremadKui100() {
    const vastus = hinnadFailist.filter(hind => hind > 100);
    setHinnad(vastus);
  }

   function filtreeriVaiksemadKui50() {
    const vastus = hinnadFailist.filter(hind => hind < 50);
    setHinnad(vastus);
  }

  function reset() {
    setHinnad(hinnadFailist.slice());
  }

  return (
    <div>
      <ArraysHome />
        <br />
        <button onClick={reset}>Reset</button>
        <div>Kokku {hinnad.length} tk</div>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        <br />
        <button onClick={filtreeriSuuremadKui100}>Jäta alles suuremad kui 100</button>
        <button onClick={filtreeriVaiksemadKui50}>Jäta alles väiksemad kui 50</button>
        {hinnad.map(hind => <div key={hind}>{hind} €</div> )}
    </div>
  )
}

export default Hinnad