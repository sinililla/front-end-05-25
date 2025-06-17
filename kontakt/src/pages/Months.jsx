import { useState } from "react"

function Months() {
    const [months, setMonths] = useState(["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]);

    function empty() {
        setMonths([]);
    }

    function reset() {
        setMonths(["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]);
    }

  return (
    <div>
        {months.map(month => <div key={month}>{month}</div>)}
        <div>Arrays sees: {months.length} tk</div>
        {months.length === 0 && <div>Kuid ei ole</div>}
        <button onClick={empty}>Tühjenda array</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Months