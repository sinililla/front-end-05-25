import tootedFailist from "../../data/tooted.json"
import { useParams } from "react-router-dom"

function YksToode() {
  const { artikkel } = useParams();
  const leitud = tootedFailist.find(toode => toode.nimi === artikkel);

  if (leitud === undefined){
    return <div>Toodet ei leitud!</div>
  }

  return (
    <>
    <div>{leitud.nimi}</div>
    <div>{leitud.hind} €</div>
    </>
  )
}

export default YksToode