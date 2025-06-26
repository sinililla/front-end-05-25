import { useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"

function YksEsindus() {
  const { pood } = useParams();
  const leitud = esindusedFailist.find(esindus => esindus.keskus === pood);

  if (leitud === undefined) {
    return <div>Esindust ei leitud</div>
  }

  return (
    <>
      <div>{leitud.keskus}</div>
      <div>{leitud.aadress}</div>
      <div>{leitud.tel}</div>
    </>
  )
}

export default YksEsindus