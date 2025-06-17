import { useState } from "react"

function Animals() {
    const [animals, setAnimals] = useState(["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]);

    function empty(){
        setAnimals([]);
    }

    function reset(){
        setAnimals(["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]);
    }
  return (
    <div>
        {animals.map(animal => <div key={animal}>{animal}</div>)}
        <div>Arrays sees: {animals.length} tk</div>
        <button onClick={empty}>Tühjenda array</button>
        <button onClick={reset}>Reset</button>
        {animals.length === 0 && <div>Loomi pole</div>}
    </div>
  )
}

export default Animals