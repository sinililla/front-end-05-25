import { useParams } from 'react-router-dom'

function YksUudis() {
    const { index } = useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudised") || []);
    const leitud = uudisedLS[index];
  return (<div>{leitud}</div>)
}

export default YksUudis