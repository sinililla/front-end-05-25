import { useEffect, useState } from "react"
import ApiHome from "./ApiHome"

function Sonastik() {
    const [sonastik, setSonastik] = useState([]);
    // uef + enter
    // käimaminemise funktsioon -> käivitub täpselt 1 korra
    useEffect(() => {
        fetch("https://marineregions.org/rest/getGazetteerTypes.json")
        .then(res => res.json())
        .then(json => setSonastik(json))
    }, []);

  return (
    <div>
        <ApiHome />
        
        
          <table>
            <thead>
              <tr>
                <th>TypeID</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
            {sonastik
                .map(sona => 
              <tr key={sona.id}>
                <td>{sona.typeID}</td>
                <td>{sona.type}</td>
                <td>{sona.description}</td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
  )
}

export default Sonastik