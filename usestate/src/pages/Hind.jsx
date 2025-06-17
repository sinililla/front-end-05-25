import { useState } from "react"

function Hind() {
  const [hind, uuendaHind] = useState(0);

  return (
    <>
        {hind === 0 && <div>Mälukaart on valimata!</div>}
        <div>Valitud mälukaardiga telefoni hind: {hind}</div>
        <button className={hind === 30 ? "aktiivne" : "mitte-aktiivne"} onClick={() => uuendaHind(30)}>Mälukaart 16GB</button>
        <button className={hind === 50 ? "aktiivne" : "mitte-aktiivne"} onClick={() => uuendaHind(50)}>Mälukaart 32GB</button>
        <button className={hind === 80 ? "aktiivne" : "mitte-aktiivne"} onClick={() => uuendaHind(80)}>Mälukaart 64GB</button>
        <button className={hind === 110 ? "aktiivne" : "mitte-aktiivne"} onClick={() => uuendaHind(110)}>Mälukaart 128GB</button>
        <button className={hind === 130 ? "aktiivne" : "mitte-aktiivne"} onClick={() => uuendaHind(130)}>Mälukaart 256GB</button>
        <button className={hind === 150 ? "aktiivne" : "mitte-aktiivne"} onClick={() => uuendaHind(150)}>Mälukaart 512GB</button>
    </>
  )
}

export default Hind