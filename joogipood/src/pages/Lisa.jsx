import joogidFailist from "../joogid.json"
import { useRef } from "react";

function Lisa() { 
    const jookRef = useRef();

    const lisa = () => {
        joogidFailist.push(jookRef.current.value);
        joogidFailist.slice();
        jookRef.current.value = "";
    }
  return (
    <div>
        <label>Lisa uus:</label> <br />
        <input ref={jookRef} type="text" /> <br />
        <button onClick={lisa}>Lisa</button>
    </div>
  )
}

export default Lisa