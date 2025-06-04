import { useState } from "react"

function Seaded() {
  const [keel, setKeel] = useState("et");
  return (
    <div>
      <button onClick={() => setKeel("et")}>Eesti keelseks</button>
      <button onClick={() => setKeel("en")}>English</button>
      <button onClick={() => setKeel("es")}>Espanol</button>
      <button onClick={() => setKeel("ru")}>Pycckij</button>
      
      {keel === "et" && <div>Leht on eesti keelne</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "es" && <div>La página está en español</div>}
      {keel === "ru" && <div>Страница на русском языке</div>}
      {keel !== "et" && <div><i>translations other than Estonian are not ready</i></div>}

    </div>
  )
}

export default Seaded