import { useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"

function YksHind() {
  const {index} = useParams();
  const leitud = hinnadFailist[index];

  if (leitud === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <>
    <div>{leitud.number}</div>
    <div>{leitud.sonana}</div>
    </>
  )
}

export default YksHind