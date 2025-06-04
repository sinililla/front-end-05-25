import { useState } from "react"

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");

  return (
    <div>
      <div>Aktiivne linn: {linn}</div>
      <button onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button onClick={() => setLinn("Tartu")}>Tartu</button>
      <button onClick={() => setLinn("Narva")}>Narva</button>
      <button onClick={() => setLinn("Pärnu")}>Pärnu</button>

      <br /><br /> 
      {linn ==="Tallinn" && 
      <div>
        <div>Ülemiste</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div>
      </div>}

      {linn === "Tartu" && 
      <div>
        <div>Lõunakeskus</div>
        <div>Raatuse</div>
      </div>}

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}

    </div>
  )
}

export default Esindused