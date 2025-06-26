import { useRef, useState } from "react"

function Tagasiside() {
  const [tagasisided, setTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
  const tagasisideRef = useRef();

  const kustuta = (index) => {
    tagasisided.splice(index, 1);
    setTagasisided(tagasisided.slice());
  }

  const lisa = () => {
    tagasisided.push(tagasisideRef.current.value);
    setTagasisided(tagasisided.slice());
    tagasisideRef.current.value = "";
  }

  return (
    <div>
        
        {tagasisided.map((element, index) => 
        <div>
          <span>{element}</span>
          <button onClick={() => kustuta(index)}>X</button>
        </div>)}
        <br />
        <label>Uus tagasiside:</label> <br />
        <input ref={tagasisideRef} type="text" /> <br />
        <button onClick={lisa}>Lisa</button>
        
    </div>
  )
}

export default Tagasiside