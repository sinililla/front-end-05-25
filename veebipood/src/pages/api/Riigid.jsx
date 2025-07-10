import { useEffect, useState } from "react"
import ApiHome from "./ApiHome"

function Riigid() {
    const [riigid, setRiigid] = useState([]);
    // uef + enter
    // käimaminemise funktsioon -> käivitub täpselt 1 korra
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name")
        .then(res => res.json())
        .then(json => setRiigid(json))
    }, []);

  return (
    <div>
        <ApiHome />
        
        
          <table>
            <thead>
              <tr>
                <th>Common Name</th>
                <th>Official Name</th>
                <th>Native Names</th>
              </tr>
            </thead>
            <tbody>
            {riigid
                .map(riik => 
              <tr key={riik.id}>
                <td>{riik.name.common}</td>
                <td>{riik.name.official}</td>
                <td>
                  {Object.entries(riik.name.nativeName).map(([langCode, names]) => (
                    <div key={langCode}>
                      <p><strong>Language ({langCode}):</strong></p>
                      <p>Common: {names.common}</p>
                      <p>Official: {names.official}</p>
                    </div>
                  ))}
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
  )
}

export default Riigid