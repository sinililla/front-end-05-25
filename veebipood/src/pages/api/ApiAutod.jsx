import { useEffect, useState } from "react"
import ApiHome from "./ApiHome"

function ApiAutod() {
    const [autod, setAutod] = useState([]);
    // uef + enter
    // käimaminemise funktsioon -> käivitub täpselt 1 korra
    useEffect(() => {
        fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100")
        .then(res => res.json())
        .then(json => setAutod(json.results))
    }, []);

  return (
    <div>
        <ApiHome />
        
        
          <table>
            <thead>
              <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
            {autod
                .map(auto => 
              <tr key={auto.id}>
                <td>{auto.make}</td>
                <td>{auto.model}</td>
                <td>{auto.year}</td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
  )
}

export default ApiAutod