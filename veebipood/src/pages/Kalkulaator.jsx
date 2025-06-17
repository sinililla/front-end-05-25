import { useState } from "react";
import Laenukalkulaator from "../components/Laenukalkulaator"
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator"
import TavaKalkulaator from "../components/TavaKalkulaator"

function Kalkulaator() {
    const [vaade, setVaade] = useState("laen");
  return (
    <div>
        <button onClick={() => setVaade("tava")}>Tavakalkulaator</button>
        <button  onClick={() => setVaade("laen")}>Laenukalkulaator</button>
        <button  onClick={() => setVaade("maksimaalne")}>Maksimaalne kalkulaator</button>
        <br /><br />
        {vaade === "tava" && <TavaKalkulaator />}
        {vaade === "laen" && <Laenukalkulaator />}
        {vaade === "maksimaalne" && <MaksimaalneKalkulaator />}

    </div>
  )
}

export default Kalkulaator