import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

function MuudaUudis() {
    const { index } = useParams();
    const uudised = JSON.parse(localStorage.getItem("uudised") || []);
    const leitud = uudised[index];
    const uudisRef = useRef();
    const navigate = useNavigate();

    const muudaUudis = () => {
        uudised[index] = uudisRef.current.value;
        localStorage.setItem("uudised", JSON.stringify(uudised));
        navigate("/halda-uudiseid");
    }

  return (
    <div>
        <label>Uudise nimi:</label>
        <input defaultValue={leitud} ref={uudisRef} type="text" /> <br />
        <button onClick={muudaUudis}>Muuda</button>
    </div>
  )
}

export default MuudaUudis