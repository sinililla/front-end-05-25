import { useState } from "react"

function Tagasiside() {
  const tagasisided = useState(["Oli hea", "Põnev", "Huvitav", "Teistsugune"]);

  return (
    <div>
        {tagasisided.map(element => <div key={element}>{element}</div>)}
    </div>
  )
}

export default Tagasiside