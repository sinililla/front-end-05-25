import { useState } from "react";

function Loader() {
    const [kasLaeb, setKasLaeb] = useState(true);
  return (
    <div>
        {kasLaeb && <div class="lds-heart"><div></div></div>} <br />
        <button onClick={() => setKasLaeb(false)}>Lõpeta laadimine</button>
    </div>
  )
}

export default Loader