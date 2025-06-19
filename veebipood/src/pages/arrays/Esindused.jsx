import { useState } from "react"
import ArraysHome from "./ArraysHome";
import esindusedFailist from "../../data/esindused.json"

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const tallinnaEsindused = esindusedFailist;

  return (
    <div>
      <ArraysHome />
      <div>Aktiivne linn: {linn}</div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

      <br /><br /> 
      {linn ==="Tallinn" && 
      <div>
        {/* <div>Ülemiste</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div> */}
        {tallinnaEsindused.map(esindus => <div key={esindus}>{esindus}</div>)}
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