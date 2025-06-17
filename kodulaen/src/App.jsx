import { useRef, useState } from 'react'
import './App.css'

function App() {
  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();
  const perioodRef = useRef();
  const [laenusumma, setLaenusumma] = useState(75000);
  const [intress, setIntress] = useState(3.85);
  const [kuumakse, setKuumakse] = useState(0);
  
  const arvutaLaenusumma = () => {
    setLaenusumma(ostuhindRef.current.value - sissemakseRef.current.value);
    arvutaKuumakse();
  }

  const arvutaIntress = () => {
    setIntress(Number(marginaalRef.current.value) + Number(euriborRef.current.value));
    arvutaKuumakse();

  }

  const arvutaKuumakse = () => {
    setKuumakse((ostuhindRef.current.value - sissemakseRef.current.value) / (perioodRef.current.value * 12) * (Number(marginaalRef.current.value) + Number(euriborRef.current.value)));

  }

  return (
    <>
      <label>Kinnisvara ostuhind</label>
      <input defaultValue={75000} ref={ostuhindRef} type="number" onChange={arvutaLaenusumma}/> <br />
      <label>Sissemakse</label>
      <input defaultValue={0} ref={sissemakseRef} type="number" onChange={arvutaLaenusumma}/> <br />
      <div>Laenusumma: {laenusumma.toFixed(2)}</div>
      <label>Periood</label>
      <input defaultValue={30} ref={perioodRef} type="text" onChange={arvutaKuumakse} /> <br />
      <label>Marginaal</label>
      <input defaultValue={1.7} onChange={arvutaIntress} ref={marginaalRef} type="number" /> <br />
      <label>Euribor</label>
      <input defaultValue={2.15} onChange={arvutaIntress} ref={euriborRef} type="number" /> <br />
      <div>Intress kokku: {intress.toFixed(2)}%</div>
      <br /><br />
      <div>Kuumakse: {kuumakse.toFixed(2)} €</div>
    </>
  )
}

export default App
