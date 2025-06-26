import { useState } from "react";

function Meist() {
  const [ kontakt, n2itaKontakt ] = useState("");
  const [valitud, setValitud] = useState("");

  const tootajad = [
    {nimi: "Arvo Pärt", ala: "Uudisklippide taustamuusika", telefon: "+31312312"},
    {nimi: "Kelly Sildaru", ala: "Püstolreporter", telefon: "+313124123"},
    {nimi: "Edward von Lõngus", ala: "Uudiste kujundamine", telefon: "+3131231231"},
    {nimi: "Kerli Kõiv", ala: "Välisturgude spetsialist", telefon: "+312312312"}
  ]

  const V6taYhendust = (tootaja) => {
    n2itaKontakt(tootaja.telefon);
    setValitud(tootaja.nimi);

  }

  return (
    <div>
      <div>See on meist leht, nähtav localhost:5173/meist aadressil.</div>
      <div>Meie töötajad:</div>
      {/* <div>Valitud töötaja: {valitud}</div> */}
      <br /> 
      <div>
        {tootajad.map(tootaja =>
        <div className={tootaja.nimi === valitud ? "valitud" : undefined}>
        <div>{tootaja.nimi}</div>
        <div>{tootaja.ala}</div>  
        <button onClick = {() => V6taYhendust(tootaja)}>Võta ühendust</button>
        <br /><br />
        </div>)}
      </div>
      <br /><br />
      {kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>
  );
}

export default Meist;