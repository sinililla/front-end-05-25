import { useState } from "react"

function Ilmumine() {

  const [n2itaLisaInfot, uuendaN2itaLisaInfot] = useState(false);

  return (
    <>
    <div onClick={() => uuendaN2itaLisaInfot(!n2itaLisaInfot)}>Sooduskoodi sisestamine ja makse arvutuskäik
    {n2itaLisaInfot === true && <span>A</span>}
    {n2itaLisaInfot === false && <span>V</span>}
    </div>
    {n2itaLisaInfot === true && <div>
        
        Tellitavad tooted ja teenused <br />

        Lisatud teenused <br />

        Family pakett <br />


        Soodustus kuni 29.03.2023 <br />

        0,00 €/kuu <br />


        39,00 €/kuu <br />


        Videolaenutus <br />


        Sisaldub paketis <br />

        FOX NOW <br />


        Sisaldub paketis <br />

        HBO <br />


        Sisaldub paketis <br />

        National Geographic keskkond <br />


        Sisaldub paketis <br />

        Go3 Film / Paramount+ <br />


        Sisaldub paketis <br />

        Lastenurk <br />


        Sisaldub paketis <br />

        Setanta Sportsi äpp <br />


        Sisaldub paketis <br />

        5 ekraani <br />


        Sisaldub paketis <br />

        Inspira + <br />


        Sisaldub paketis <br />

        Salvestamine <br />


        Sisaldub paketis 
        </div>}
    </>
  )
}

export default Ilmumine