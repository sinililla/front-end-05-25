import { useRef, useState } from "react"

function Leht() {
  const inputistLugeja = useRef();
  const teadeRef = useRef();
  const [muutuvHTMLs, funktsioonMuutujaMuutmiseks] = useState("");
  const [kasutajanimi, setKasutajanimi] = useState("kasutajanimi");
  const [kogus, setKogus] = useState(5);
  const [teade, setTeade] = useState("Tere");
  const [vanus, setVanus] = useState(65);

  const onClickFunktsioon = () => {
    funktsioonMuutujaMuutmiseks(inputistLugeja.current.value);
  }

  const onClickSisesta = () => {
    setTeade(teadeRef.current.value);
  }


  return (
    <div className="center">
        <input ref={inputistLugeja} type="text" />
        <button onClick={onClickFunktsioon}>Muuda</button>
        <div>{muutuvHTMLs}</div>
        <br /> <br />
        <div>{kasutajanimi}</div>
        <button onClick={() => setKasutajanimi("Herbert")}>Muuda</button>
        <br /> <br />
        <div>{kogus}</div>
        <button onClick={() => setKogus(kogus * 3)}>Suurenda kolm korda</button> <button onClick={() => setKogus(5)}>Algväärtus</button>
        <br /> <br />
        <input ref={teadeRef} type="text" />
        <button onClick={onClickSisesta}>Sisesta</button>
        {teade === "Tere" && <div>{teade} maailm!!</div>}
        <br /> <br />
        {vanus >= 65 && <div>Oled pensionil</div>}
        {vanus < 65 && <div>Oled tööealine</div>}
        <button onClick={() => setVanus(vanus-1)}>-</button>
        <span>{vanus}</span>
        <button onClick={() => setVanus(vanus+1)}>+</button>

    </div>
  )
}

export default Leht