import { useState } from "react";

function Avaleht() {
    const tegelased = [
        {eesnimi: "Mickey", perekonnanimi: "Mouse", aadress: "Disneyland"},
        {eesnimi: "Minnie", perekonnanimi: "Mouse", aadress: "Disneyland"},
        {eesnimi: "Winnie", perekonnanimi: "Pooh", aadress: "Hundred Acre Wood"},
        {eesnimi: "Roo", perekonnanimi: "Kangaroo", aadress: "Hundred Acre Wood"},
        {eesnimi: "Scooby", perekonnanimi: "Doo", aadress: "Crystal Cove"}
    ];

    const [ValitudTegelane, setValitudTegelane] = useState("");

    const kuvaNimi = (tegelane) => {
        setValitudTegelane(tegelane.eesnimi);
        console.log(tegelane.eesnimi);
    }

  return (
    <div>
        {ValitudTegelane !== "" && <div>Klikkisid tegelase {ValitudTegelane} peal.</div>}
        {tegelased.map(tegelane =>
            <div>
                <div>{tegelane.eesnimi}</div>
                <div>{tegelane.perekonnanimi}</div>
                <div>{tegelane.aadress}</div>
                <button onClick={() => kuvaNimi(tegelane)}>X</button>
            </div>)}
        
    </div>
  )
}

export default Avaleht