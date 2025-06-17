import { useState } from "react";

function Words() {
    const [words, setWords] = useState(["spray", "elite", "exuberant", "destruction", "present"]);

    function reset() {
        setWords(["spray", "elite", "exuberant", "destruction", "present"]);
    }

    function empty() {
        setWords([]);
    }

  return (
    <div>
        {words.map(word => <div key={word}>{word}</div>)}
        <button onClick={empty}>Tühjenda array</button>
        <button onClick={reset}>Reset</button>
        <div>Arrays sees: {words.length} tk</div>
        {words.length === 0 && <div>Sõnu pole</div>}
    </div>
  )
}

export default Words