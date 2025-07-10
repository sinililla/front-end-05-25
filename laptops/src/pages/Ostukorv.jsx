import { useState } from "react"

function Ostukorv() {
    const [ostukorv, setOstukorv] = useState(JSON.parse(localStorage.getItem("cartLaptops")) || []);

    const eemalda = (index) => {
        ostukorv.splice(index, 1);
        setOstukorv(ostukorv.slice());
        localStorage.setItem("cartLaptops", JSON.stringify(ostukorv));
    }

  return (
    <div>
        {ostukorv.map((toode, index) =>
        <div key={index}>
            <div>{toode.mark}</div>
            <div>{toode.mudel}</div>
            <div>{toode.maksumus}</div>
            <button onClick={() => eemalda(index)}>X</button>
        </div>
        )}
    </div>
  )
}

export default Ostukorv