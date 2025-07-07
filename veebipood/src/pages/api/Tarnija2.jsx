import { useEffect, useState } from "react"
import ApiHome from "./ApiHome"

function Tarnija2() {
    const [tooted, setTooted] = useState([]);
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(json => setTooted(json))
    }, []);

  return (
    <div>
        <ApiHome />
        
        
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Slug</th>
                <th>Price</th>
                <th>Retail price</th>
                <th>Description</th>
                <th>Category</th>
                
                <th>Image</th>
                
              </tr>
            </thead>
            <tbody>
            {tooted
            .sort((a, b) => a.id - b.id)
                .map(product => 
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.slug}</td>
                <td>{product.price}€</td>
                <td>{(product.price * 1.2).toFixed(2)}€</td>
                <td>{product.description}</td>
                <td>{product.category.name}</td>
                <td><img style={{width: "100px"}} src={product.images} alt=""/></td>  
              </tr>
              )}
            </tbody>
          </table>
        </div>
  )
}

export default Tarnija2