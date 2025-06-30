import { useParams } from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json"

function YksTootaja() {

  const { tootajaleht } = useParams();
  const leitud = tootajadFailist.find(tootaja => tootaja.nimi === tootajaleht);
  
   if (leitud === undefined) {
    return <div>Tootajat ei leitud</div>
  }

  return (
    <>
      <div>{leitud.nimi}</div>
    </>
  )
}

export default YksTootaja