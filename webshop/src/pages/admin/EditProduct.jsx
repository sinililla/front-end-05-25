import { useParams, useNavigate } from "react-router-dom"
import productsFromFile from "../../data/products.json"
import { useRef } from "react"

function EditProduct() {
  const { index } = useParams();
  const found = productsFromFile[index];
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRef = useRef();
  const ratingCountRef = useRef();
  const navigate = useNavigate();

  if (found === undefined) {
    return <div>Product could not be found</div>
  }

  
  const editProduct = () => {

    productsFromFile[index] = 
    {
      "id" : Number(idRef.current.value), 
      "title" : titleRef.current.value, 
      "price" : Number(priceRef.current.value), 
      "description" : descRef.current.value,
      "category" : categoryRef.current.value,
      "image" : imageRef.current.value,
       "rating": {
            "rate": Number(ratingRef.current.value),
            "count": Number(ratingCountRef.current.value)
        }
    }

    navigate("/admin/maintain-products");

  }

  return (
    <div>
      
      <label>ID</label> <br />
      <input ref={idRef} defaultValue={found.id} type="number" /> <br />
      <label>Title</label> <br />
      <input ref={titleRef} defaultValue={found.title} type="text" /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} defaultValue={found.price} type="number" /> <br />
      <label>Description</label> <br />
      <input ref={descRef} defaultValue={found.description} type="text" /> <br />
      <label>Category</label> <br />
      <select ref={categoryRef} defaultValue={found.category}>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select><br />
      <label>Image</label> <br />
      <input ref={imageRef} defaultValue={found.image} type="text" /> <br />
      <label>Rating</label> <br />
      <input ref={ratingRef} defaultValue={found.rating.rate} type="number" /> <br />
      <label>Rating count</label> <br />
      <input ref={ratingCountRef} defaultValue={found.rating.count} type="number" /> <br /><br />
      <button onClick={editProduct}>Edit product</button>

    </div>
  )
}

export default EditProduct