import { useRef, useState } from "react"
import productsFromFile from "../../data/products.json"

function AddProduct() {
  const [products, setProducts] = useState(productsFromFile);
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const selectRef = useRef();
  const imageRef = useRef();
  const ratingRateRef = useRef();
  const ratingCountRef = useRef();
  const [unique, setUnique] = useState(true);

  const checkUniqueID = () => {
    const found = productsFromFile.find(product => product.id.toString() === idRef.current.value.toString());
    if (found === undefined){
      setUnique(true);
    } else {
      setUnique(false);
    }
  }

  const addProduct = () => {
      productsFromFile.push( {
        "id" : idRef.current.value, 
        "title" : titleRef.current.value,
        "price" : priceRef.current.value,
        "description" : descriptionRef.current.value,
        "category" : selectRef.current.value,
        "image": imageRef.current.value,
        "rating": {
            "rate": ratingRateRef.current.value,
            "count": ratingCountRef.current.value
        }
    })
    setProducts(productsFromFile.slice());
      idRef.current.value = "";
      titleRef.current.value = "";
      priceRef.current.value = "";
      descriptionRef.current.value = "";
      selectRef.current.value = "";
      imageRef.current.value = "";
      ratingRateRef.current.value = "";
      ratingCountRef.current.value = "";
  }

  return (
    <div>
      <label>ID</label> <br />
      <input onChange={checkUniqueID} ref={idRef} type="number" /> <br />
      {unique === false && <div style={{color:"red"}}>A product with this ID already exists!</div>}
      <label>Title</label> <br />
      <input ref={titleRef} type="text" /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>Category</label> <br />
      <select ref={selectRef}>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select> <br />
      <label>Image</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>Rating</label> <br />
      <input ref={ratingRateRef} type="number" /> <br />
      <label>Rating count</label> <br />
      <input ref={ratingCountRef} type="number" /> <br />
      <button onClick={addProduct} disabled={unique === false}>Add product</button>
      
      
    </div>
  )
}

export default AddProduct