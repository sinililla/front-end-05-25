import { useRef, useState } from "react";

function Kinkekaart() {
  // Reacti HOOK
  const [summa, setSumma] = useState(20); // --> need mis lähevad HTML-i ja muutuvad seal
  const [kogus, setkogus] = useState(1);
  const emailRef = useRef(); //inputiga ära sidumiseks
  const [sonum, setSonum] = useState(""); // HTMLi, mis on muutuvas seisundis
  const sisesta = () => { // onClick
if (emailRef.current.value.includes("@") === false) {
setSonum("Ei saa lisada ilma @ märgita!")
} else {
  setSonum("Email lisatud!");
}

  }


  return (
    <div>
      <button onClick={() => setSumma(20)}>20€</button>
      <button onClick={() => setSumma(50)}>50€</button>
      <button onClick={() => setSumma(100)}>100€</button>
      <div> Kinkekaart {summa}€ </div>

      <br /><br />

      <button disabled={kogus === 1} onClick={() => setkogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setkogus(kogus + 1)}>+</button>

      <br /><br />

      <div>{kogus * summa} €</div>

      <br /><br />

      <div>{sonum}</div>
      <label htmlFor="email">E-mail</label> <br />
      <input ref={emailRef} id="email" type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button>

    </div>
  )
}

export default Kinkekaart