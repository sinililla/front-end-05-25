import { useRef, useState } from "react"
import nimedJson from "../nimed.json"
import { ToastContainer, toast } from 'react-toastify';

function TagasisideAndjad() {
    const [nimed, setNimed] = useState(nimedJson);
    const nimiRef = useRef();

    function Mnimed() {
        const vastus = nimed.filter(nimi => nimi.startsWith("M"));
        setNimed(vastus);
    }

    function KuueKohalised() {
        const vastus = nimed.filter(nimi => nimi.length === 6);
        setNimed(vastus);
    }

    function Yloppevad() {
        const vastus = nimed.filter(nimi => nimi.endsWith("y"));
        setNimed(vastus);
    }

    const sortZA = () => {
        nimed.sort((a, b) => b.localeCompare(a));
        setNimed(nimed.slice());
    }

    const kustuta = (index) => {
        nimed.splice(index, 1);
        setNimed(nimed.slice());
        toast.success("Kustutatud!");
    }

    const lisa = () => {
        if (nimiRef.current.value === ""){
            toast.error("Tühja nime ei saa lisada!");
            return;
        }
        nimed.push(nimiRef.current.value);
        setNimed(nimed.slice());
        toast.success("Nimi on edukalt lisatud!");
        nimiRef.current.value = "";
        
    }

  return (
    <div>
        <ToastContainer />
        <div>Nimesid on: {nimed.length} tk</div>
        <button onClick={Mnimed}>Filtreeri M nimed</button>
        <button onClick={KuueKohalised}>Filtreeri 6-kohalised nimed</button>
        <button onClick={Yloppevad}>Filtreeri Y-tähega lõppevad</button>
        <br />
        <button onClick={sortZA}>Sorteeri Z-A</button>
        <br /> <br />
        <label>Uus nimi:</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={lisa}>Lisa</button>
        {/* {nimed.map(nimi => <div key={nimi}>{nimi}</div>)}; */}
        {nimed.map((nimi, index) => 
        <div key={nimi}>EST-{nimi}
        <button onClick={() => kustuta(index)}>x</button>
        </div>)};
        
    </div>
  )
}

export default TagasisideAndjad