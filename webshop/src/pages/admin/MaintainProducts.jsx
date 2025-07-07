import { useRef, useState } from 'react'
import productsFromFile from '../../data/products.json'
import AdminHome from './AdminHome'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom';


function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());

  const searchRef = useRef();

   const removeProduct = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
    toast.success("Product successfully removed!");
  }

  const searchProducts = () => { 
    const result = productsFromFile.filter(product => product.title.includes(searchRef.current.value));
    setProducts(result); 
  }

  
  
  
  
  return (
    <div>
      <ToastContainer/>
      <AdminHome />
      <label>Search: </label>
      <input ref={searchRef} onChange={searchProducts} type="text" /> <br /><br />
      {products.map((product, index) => 
        <div key={product}>
          <table>
            <thead>
              <tr>
                <th style={{width: "5%"}}>ID</th>
                <th style={{width: "10%"}}>Title</th>
                <th style={{width: "10%"}}>Price</th>
                <th style={{width: "35%"}}>Description</th>
                <th style={{width: "10%"}}>Category</th>
                <th style={{width: "10%"}}>Image</th>
                <th style={{width: "5%"}}>Rating</th>
                <th style={{width: "5%"}}>Rate count</th>
                <th style={{width: "5%"}}>Delete</th>
                <th style={{width: "5%"}}>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td><img style={{width: "100px"}} src={product.image} alt=""/></td>
                <td>{product.rating.rate}</td>
                <td>{product.rating.count}</td>
                <td><button onClick={() => removeProduct(index)}>X</button></td>
                <Link to={"/admin/edit-product/" + index}>
                  <td><button>Edit</button></td>
                </Link>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default MaintainProducts