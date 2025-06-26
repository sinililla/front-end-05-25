import { useState } from "react";
import tegevusedFailist from "../tegevused.json";

function Tegevused() {
    const [tegevused, setTegevused] = useState(tegevusedFailist);

    const showID1 = () => {
        const vastus = tegevused.filter(tegevus => tegevus.userId === 1);
        setTegevused(vastus);
    }

     const showID2 = () => {
        const vastus = tegevused.filter(tegevus => tegevus.userId === 2);
        setTegevused(vastus);
    }

     const showID3 = () => {
        const vastus = tegevused.filter(tegevus => tegevus.userId === 3);
        setTegevused(vastus);
    }

    const showCompleted = () => {
        const vastus = tegevused.filter(tegevus => tegevus.completed === true);
        setTegevused(vastus);
    }

    const showUnfinished = () => {
        const vastus = tegevused.filter(tegevus => tegevus.completed === false);
        setTegevused(vastus);
    }

    const startsWithT = () => {
        const vastus = tegevused.filter(tegevus => tegevus.title.startsWith("t"));
        setTegevused(vastus);
    }

    const LongerThan20 = () => {
        const vastus = tegevused.filter(tegevus => tegevus.title.length > 20);
        setTegevused(vastus);
    }

    const reset = () => {
        setTegevused(tegevusedFailist);
    }
  return (
    <div>
        <div>Tegevusi on: {tegevused.length}</div>
        <button onClick={showID1}>Kuva kõik kasutaja ID 1 tegevused</button>
        <button onClick={showID2}>Kuva kõik kasutaja ID 2 tegevused</button>
        <button onClick={showID3}>Kuva kõik kasutaja ID 3 tegevused</button>
        <button onClick={showCompleted}>Kuva kõik valmis tegevused</button>
        <button onClick={showUnfinished}>Kuva kõik mittevalmis tegevused</button>
        <button onClick={startsWithT}>Kuva kõik "t" tähega algavad tegevused</button>
        <button onClick={LongerThan20}>Kuva tegevused, millel on tähemärke üle 20</button>
        <button onClick={reset}>Kuva kõik tegevused tagasi</button>
        {tegevused.map(tegevus =>
            <div>
                <div>{tegevus.userId}</div>
                <div>{tegevus.id}</div>
                <div>{tegevus.title}</div>
                <div>{tegevus.completed}</div>
            </div>
        )}
        
    </div>
  )
}

export default Tegevused