import { useState } from "react";
import ArraysHome from "./ArraysHome";


function Tooted() {
  const [joogid, setJoogid] = useState(["Coca", "Fanta", "Sprite", "Vichy", "Red Bull", "Aura", "Monster Energy", "Värska", "Tarhun", "Dr. Pepper"]);

  function reset() {
    setJoogid(["Coca", "Fanta", "Sprite", "Vichy", "Red Bull", "Aura", "Monster Energy", "Värska", "Tarhun", "Dr. Pepper"]);
  }

  const sortAZ = () => {
    joogid.sort((a, b) => a.localeCompare(b));
    setJoogid(joogid.slice());
  }

  const sortZA = () => {
    joogid.sort((a, b) => b.localeCompare(a));
    setJoogid(joogid.slice());
  }

  const Kasvavalt = () => {
    joogid.sort((a, b) => a.length - b.length);
    setJoogid(joogid.slice());
  }

  const Kahanevalt = () => {
    joogid.sort((a, b) => b.length - a.length);
    setJoogid(joogid.slice());
  }

  const TeineTahtAZ = () => {
    joogid.sort((a, b) => a[1].localeCompare(b[1]));
    setJoogid(joogid.slice());
  }

  function Kuni6Tahte() {
    const vastus = joogid.filter(jook => jook.length < 6);
    setJoogid(vastus);
  }

  function KuueTahelised() {
    const vastus = joogid.filter(jook => jook.length === 6);
    setJoogid(vastus);
  }

  function lopusA() {
    const vastus = joogid.filter(jook => jook.endsWith("a"));
    setJoogid(vastus);
  }

  function algusesY() {
    const vastus = joogid.filter(jook => jook.endsWith("y"));
    setJoogid(vastus);
  }

  function paarisArvTahti() {
    const vastus = joogid.filter(jook => jook.length % 2 === 0);
    setJoogid(vastus);
  }

  return (
    <div>
      <ArraysHome />
      <button onClick={sortAZ}>Sorteeri A-Z</button>
      <button onClick={sortZA}>Sorteeri Z-A</button>
      <button onClick={Kasvavalt}>Tähed kasvavalt</button>
      <button onClick={Kahanevalt}>Tähed kahanevalt</button>
      <button onClick={TeineTahtAZ}>Teine täht A-Z</button>
      {joogid.map(jook => <div key={jook}>{jook}</div>)}
      <div>Tooteid on {joogid.length} tk.</div>
      <button onClick={Kuni6Tahte}>Kuni 6 tähelised</button>
      <button onClick={KuueTahelised}>Täpselt 6 tähelised</button>
      <button onClick={lopusA}>A-ga lõppevad</button>
      <button onClick={algusesY}>Y-ga lõppevad</button>
      <button onClick={paarisArvTahti}>Paarisarv tähti sisaldavad</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Tooted