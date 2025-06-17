import { useState } from "react"

function Hinnad() {
  const [hinnad, setHinnad] = useState([9, 123, 54, 515, 78, 23, 31, 89, 44]);

  function sorteeriKasvavalt() {
    hinnad.sort((a, b) => a - b );
    setHinnad(hinnad.slice()); //.slice() --> kustutab mälukoha (kust ta pärineb)
  } // miks siin on seda vaja? sest muidu uuendatakse 'hinnad' muutujat 'setHinnad' abil, pannes sisse 'hinnad'

  function sorteeriKahanevalt() {
     hinnad.sort((a, b) => b - a );
    setHinnad(hinnad.slice());
  }

  function filtreeriSuuremadKui100() {
    const vastus = hinnad.filter(hind => hind > 100);
    setHinnad(vastus);
  }

   function filtreeriVaiksemadKui50() {
    const vastus = hinnad.filter(hind => hind < 50);
    setHinnad(vastus);
  }

  function reset() {
    setHinnad([9, 123, 54, 515, 78, 23, 31, 89, 44]);
  }

  return (
    <div>
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