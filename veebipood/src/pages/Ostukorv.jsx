import { useState } from "react"

function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"]);

  // <div key={toode}>{toode}</div> <--- key={} mällu jätmiseks, kui re-renderdatakse 
  // re-renderdamine ---> useState setteri kasutamine
  return (
    <div>
      {tooted.length > 0 &&
      <>
        <div>Ostukorvis on {tooted.length} eset</div>
        <button onClick={() => setTooted([])}>Tühjenda</button>
      </>}
      {tooted.length === 0 && <div>Ostukorv on tühi</div>}
      {tooted.map(toode => <div key={toode}>{toode}</div>)}

      <br />
      {tooted.length > 0 && <div>Ostukorvi kogusumma xx €</div>}

    </div>
  )
}

export default Ostukorv