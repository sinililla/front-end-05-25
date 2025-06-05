import { useState } from "react";
import KinkekaardiEmail from "../components/KinkekaardiEmail";

function Kinkekaart() {
  // Reacti HOOK
  const [summa, setSumma] = useState(20); // --> need mis lähevad HTML-i ja muutuvad seal
  const [kogus, setkogus] = useState(1);
 


  return (
    <div>
      <button className={summa === 20 ? "summa-aktiivne" : undefined} onClick={() => setSumma(20)}>20€</button>
      <button className={summa === 50 ? "summa-aktiivne" : undefined} onClick={() => setSumma(50)}>50€</button>
      <button className={summa === 100 ? "summa-aktiivne" : undefined} onClick={() => setSumma(100)}>100€</button>
      <div> Kinkekaart {summa}€ </div>

      <br /><br />

      <button disabled={kogus === 1} onClick={() => setkogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setkogus(kogus + 1)}>+</button>

      <br /><br />

      <div>{kogus * summa} €</div>

      <br /><br />

      <KinkekaardiEmail />

    </div>
  )
}

export default Kinkekaart