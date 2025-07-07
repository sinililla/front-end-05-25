import { useEffect, useState } from "react"
import ApiHome from "./ApiHome"

function Tarnija3() {
    const [tooted, setTooted] = useState([]);
    useEffect(() => {
        fetch("https://api.itbook.store/1.0/search/react?page=0")
        .then(res => res.json())
        .then(json => setTooted(json.books))
    }, []);

  return (
    <div>
        <ApiHome />
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Osta</th>
                <th>Subtitle</th>  
                <th>ISBN</th>            
                <th>Image</th>
                
              </tr>
            </thead>
            <tbody>
            {tooted
                .map(product => 
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td><a href={product.url}>Osta</a></td>
                <td>{product.subtitle}</td>
                <td>{product.isbn13}</td>
                <td><img style={{width: "100px"}} src={product.image} alt=""/></td>  
              </tr>
              )}
            </tbody>
          </table>
        </div>
  )
}

export default Tarnija3